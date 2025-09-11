import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Compass, Globe, Heart, Users, Award } from "lucide-react";

const About = () => {
  const differentiators = [
    {
      icon: Compass,
      title: "Expert Local Guides",
      description: "Our handpicked local guides share authentic stories and hidden gems you won't find in guidebooks."
    },
    {
      icon: Globe,
      title: "Sustainable Travel",
      description: "We partner with eco-friendly accommodations and support local communities in every destination."
    },
    {
      icon: Heart,
      title: "Personalized Experiences",
      description: "Every adventure is tailored to your interests, fitness level, and travel dreams."
    },
    {
      icon: Users,
      title: "Small Group Journeys",
      description: "Intimate group sizes ensure personal attention and meaningful connections with fellow travelers."
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized globally for exceptional customer service and unforgettable travel experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-travel-blue/10 to-ocean-blue/10 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About Roundtrip Adventure
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transforming wanderlust into extraordinary memories since our journey began.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Story
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Born from a passion for authentic travel experiences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Roundtrip Adventure began with a simple belief: that travel should transform you. 
                  Founded by a team of passionate explorers who had experienced the magic of authentic, 
                  meaningful journeys, we set out to share that same transformative power with fellow adventurers.
                </p>
                <p className="leading-relaxed">
                  Over the years, we've guided thousands of travelers through breathtaking landscapes, 
                  vibrant cultures, and life-changing experiences. From the misty peaks of the Himalayas 
                  to the pristine beaches of hidden tropical islands, every adventure we craft is designed 
                  to create lasting memories and broaden perspectives.
                </p>
                <p className="leading-relaxed">
                  We believe that every journey should be memorable, meaningful, and perfectly tailored 
                  to your adventurous spirit. Whether you're seeking thrilling outdoor activities, 
                  cultural immersion, or peaceful retreats, we're here to turn your travel dreams into reality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Makes Us Different
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We go beyond typical travel packages to create transformative experiences that stay with you forever.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-travel-blue to-ocean-blue rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-lg bg-gradient-to-br from-travel-blue/5 to-ocean-blue/5">
            <CardContent className="p-12 text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                "To transform wanderlust into reality by connecting adventurous spirits with 
                authentic experiences that create lasting memories, foster personal growth, 
                and broaden perspectives on our beautiful world."
              </p>
              <div className="pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-travel-blue to-ocean-blue hover:from-travel-blue/90 hover:to-ocean-blue/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link to="/">Start Your Adventure</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;