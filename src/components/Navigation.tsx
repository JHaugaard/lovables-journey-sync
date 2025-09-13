import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, callback: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      callback();
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl font-bold text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
              aria-label="Web Dev Journey - Home"
            >
              DevLearning
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4" role="menubar">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
                aria-current={isActive("/") ? "page" : undefined}
                role="menuitem"
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "nav-link-active" : ""}`}
                aria-current={isActive("/about") ? "page" : undefined}
                role="menuitem"
              >
                About
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="text-muted-foreground hover:text-foreground hover:bg-accent focus:ring-2 focus:ring-ring"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-200 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border mt-2">
            <Link
              to="/"
              className={`block nav-link ${isActive("/") ? "nav-link-active" : ""}`}
              aria-current={isActive("/") ? "page" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block nav-link ${isActive("/about") ? "nav-link-active" : ""}`}
              aria-current={isActive("/about") ? "page" : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;