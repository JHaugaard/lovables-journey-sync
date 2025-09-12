import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { username: string } | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      const stored = localStorage.getItem('auth_user');
      if (stored) {
        try {
          const userData = JSON.parse(stored);
          // Verify the stored auth by making a test request
          const response = await fetch(window.location.origin, {
            headers: {
              'Authorization': `Basic ${btoa(`${userData.username}:${userData.password}`)}`
            }
          });
          
          if (response.ok) {
            setUser({ username: userData.username });
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('auth_user');
          }
        } catch (error) {
          localStorage.removeItem('auth_user');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Test the credentials with HTTP Basic Auth
      const response = await fetch(window.location.origin, {
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        }
      });

      if (response.ok) {
        const userData = { username, password };
        localStorage.setItem('auth_user', JSON.stringify(userData));
        setUser({ username });
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};