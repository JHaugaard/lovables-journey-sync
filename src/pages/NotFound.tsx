import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold text-foreground">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            <div className="space-x-4">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Return Home
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-4 py-2 border border-border text-foreground rounded-md hover:bg-accent transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
