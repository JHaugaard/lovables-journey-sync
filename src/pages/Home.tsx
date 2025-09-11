import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const adventures = [
    {
      title: "Mountain Escape",
      description: "Experience breathtaking peaks and pristine wilderness on an unforgettable mountain adventure.",
      gradient: "from-emerald-500 to-blue-600"
    },
    {
      title: "Ocean Adventure", 
      description: "Dive into crystal clear waters and explore vibrant marine life in paradise destinations.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Desert Journey",
      description: "Discover ancient landscapes and experience the mystique of endless golden dunes.",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-travel-blue to-ocean-blue text-white py-20 lg:py-32">
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
                className="bg-white text-travel-blue hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link to="/about">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Gallery */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From mountain peaks to ocean depths, every journey tells a story worth living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adventure, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-card"
              >
                <div className={`h-48 bg-gradient-to-br ${adventure.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{adventure.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {adventure.description}
                  </CardDescription>
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    >
                      Explore Journey
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;