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
          // Build base-aware probe URL
          const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
          const probeUrl = `${base}/auth-probe.txt`;
          
          // Verify the stored auth by testing against the auth probe
          let response = await fetch(probeUrl, {
            method: 'HEAD',
            headers: {
              'Authorization': `Basic ${btoa(`${userData.username}:${userData.password}`)}`
            },
            cache: 'no-store'
          });
          
          // Fallback to GET if HEAD fails
          if (!response.ok) {
            response = await fetch(probeUrl, {
              method: 'GET',
              headers: {
                'Authorization': `Basic ${btoa(`${userData.username}:${userData.password}`)}`
              },
              cache: 'no-store'
            });
          }
          
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
      // Build base-aware probe URL
      const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
      const probeUrl = `${base}/auth-probe.txt`;
      
      console.log('🔐 Attempting login with probe test...');
      console.log('🎯 Probe URL:', probeUrl);
      
      // Test the credentials against the auth probe file
      let response = await fetch(probeUrl, {
        method: 'HEAD',
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        },
        cache: 'no-store'
      });

      console.log('📡 HEAD response:', {
        url: probeUrl,
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      // Fallback to GET if HEAD fails
      if (!response.ok) {
        console.log('🔄 Retrying with GET method...');
        response = await fetch(probeUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${btoa(`${username}:${password}`)}`
          },
          cache: 'no-store'
        });
        
        console.log('📡 GET response:', {
          url: probeUrl,
          status: response.status,
          statusText: response.statusText,
          ok: response.ok
        });
      }

      if (response.ok) {
        console.log('✅ Authentication successful');
        const userData = { username, password };
        localStorage.setItem('auth_user', JSON.stringify(userData));
        setUser({ username });
        setIsAuthenticated(true);
        return true;
      }
      console.log('❌ Authentication failed - invalid credentials');
      return false;
    } catch (error) {
      console.error('🚨 Login error:', error);
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