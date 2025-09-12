import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Shield, Settings, User } from 'lucide-react';

const Admin: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the protected admin area, {user?.username}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              User Information
            </CardTitle>
            <CardDescription>
              Your account details and status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Username:</span>
                <span className="text-sm text-muted-foreground">{user?.username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Status:</span>
                <Badge variant="secondary">Authenticated</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Role:</span>
                <Badge variant="outline">Admin</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-travel-blue" />
              Security
            </CardTitle>
            <CardDescription>
              Authentication and security status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Auth Method:</span>
                <span className="text-sm text-muted-foreground">HTTP Basic</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Session:</span>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                  Active
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Protected:</span>
                <Badge variant="secondary">Server-side</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-travel-indigo" />
              Site Settings
            </CardTitle>
            <CardDescription>
              Administrative tools and configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• This is a protected admin area</p>
              <p>• Authentication via HTTP Basic Auth</p>
              <p>• Session stored client-side</p>
              <p>• No external database required</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Protected Content</CardTitle>
          <CardDescription>
            This content is only visible to authenticated users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            You are viewing a protected area of the site. This demonstrates the client-side
            authentication working in conjunction with HTTP Basic Auth from your Hostinger server.
            The authentication state is maintained in localStorage and verified against your
            server configuration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;