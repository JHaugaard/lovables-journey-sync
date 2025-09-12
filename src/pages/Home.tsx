import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { analytics } from "@/components/Analytics";
import { MapPin, Mountain, Waves, Sun } from "lucide-react";

const Home = () => {
  const adventures = [
    {
      title: "Mountain Escape",
      description: "Experience breathtaking peaks and pristine wilderness on an unforgettable mountain adventure.",
      gradient: "from-emerald-500 to-blue-600",
      icon: Mountain,
      alt: "Mountain peaks with snow-capped summits"
    },
    {
      title: "Ocean Adventure", 
      description: "Dive into crystal clear waters and explore vibrant marine life in paradise destinations.",
      gradient: "from-purple-500 to-pink-500",
      icon: Waves,
      alt: "Ocean waves with tropical marine life"
    },
    {
      title: "Desert Journey",
      description: "Discover ancient landscapes and experience the mystique of endless golden dunes.",
      gradient: "from-yellow-400 to-orange-500",
      icon: Sun,
      alt: "Desert landscape with golden sand dunes"
    }
  ];

  const handleAdventureClick = (adventureType: string) => {
    analytics.adventure(adventureType);
  };

  const handleCTAClick = () => {
    analytics.click('start_journey_cta', 'hero_section');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-travel-blue to-ocean-blue text-white py-20 lg:py-32" role="banner">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Welcome to Roundtrip Adventure
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover amazing travel experiences and plan your perfect adventure. 
              Start exploring the world with our curated journeys that create memories to last a lifetime.
            </p>
            <div className="mt-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-travel-blue hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl smooth-transition interactive-scale"
                onClick={handleCTAClick}
              >
                <Link to="/about" aria-describedby="cta-description">
                  Start The Journey Today!
                </Link>
              </Button>
              <p id="cta-description" className="sr-only">
                Learn more about our adventure travel packages and services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Gallery */}
      <section className="py-20 lg:py-32" aria-labelledby="adventures-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 id="adventures-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From mountain peaks to ocean depths, every journey tells a story worth living.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {adventures.map((adventure, index) => {
              const IconComponent = adventure.icon;
              return (
                <Card 
                  key={index} 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl smooth-transition interactive-scale cursor-pointer bg-card"
                  role="listitem"
                  onClick={() => handleAdventureClick(adventure.title)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleAdventureClick(adventure.title);
                    }
                  }}
                  tabIndex={0}
                  aria-label={`Explore ${adventure.title} adventure package`}
                >
                  <div className={`h-48 bg-gradient-to-br ${adventure.gradient} relative overflow-hidden`} role="img" aria-label={adventure.alt}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-4 right-4">
                      <IconComponent className="w-8 h-8 text-white/80" aria-hidden="true" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{adventure.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                      {adventure.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground smooth-transition"
                      aria-label={`Learn more about ${adventure.title}`}
                    >
                      Explore The Journey
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;