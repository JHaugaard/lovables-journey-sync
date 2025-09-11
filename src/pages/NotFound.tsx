import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Compass, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-background to-muted/20">
          <CardContent className="p-12 text-center space-y-8">
            {/* Large 404 with travel theme */}
            <div className="relative">
              <div className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-travel-blue to-ocean-blue bg-clip-text text-transparent">
                404
              </div>
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Travel-themed message */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Looks like you've wandered off the beaten path!
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Don't worry, even the best explorers sometimes take a wrong turn. 
                Let's get you back on track to your next great adventure.
              </p>
            </div>

            {/* Compass decoration */}
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-travel-blue/20 to-ocean-blue/20 rounded-full flex items-center justify-center">
                <Compass className="w-8 h-8 text-travel-blue animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>

            {/* Navigation options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-travel-blue to-ocean-blue hover:from-travel-blue/90 hover:to-ocean-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/" className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Return Home
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/about" className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Learn About Us
                </Link>
              </Button>
            </div>

            {/* Fun travel quote */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                "Not all those who wander are lost... but this page definitely is!"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
