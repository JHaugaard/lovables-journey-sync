import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { analytics } from "@/components/Analytics";
import { Code, Layers, Database, BookOpen } from "lucide-react";

const Home = () => {
  const learningModules = [
    {
      title: "Frontend Fundamentals",
      description: "Master HTML, CSS, and JavaScript to build interactive web interfaces with modern techniques.",
      icon: Code,
      alt: "Code editor with HTML, CSS, and JavaScript"
    },
    {
      title: "React & Modern Frameworks",
      description: "Learn component-based architecture, state management, and hooks for building dynamic applications.",
      icon: Layers,
      alt: "React component structure and framework concepts"
    },
    {
      title: "Backend & APIs",
      description: "Understand server-side development, databases, and RESTful API design patterns.",
      icon: Database,
      alt: "Database and API architecture diagrams"
    }
  ];

  const handleModuleClick = (moduleType: string) => {
    analytics.adventure(moduleType);
  };

  const handleCTAClick = () => {
    analytics.click('start_learning_cta', 'hero_section');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32" role="banner">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Web Dev Journey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Learn web development through hands-on practice and real-world projects. 
              Track your progress as you master modern development tools and techniques.
            </p>
            <div className="mt-12">
              <Button 
                asChild 
                size="lg" 
                className="px-8 py-4 text-lg font-medium"
                onClick={handleCTAClick}
              >
                <Link to="/about" aria-describedby="cta-description">
                  Start Learning Today
                </Link>
              </Button>
              <p id="cta-description" className="sr-only">
                Learn more about the learning approach and progress tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-20 lg:py-32" aria-labelledby="modules-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2 id="modules-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Learning Modules
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Build your skills progressively with structured learning paths designed for practical application.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {learningModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-card border"
                  role="listitem"
                  onClick={() => handleModuleClick(module.title)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleModuleClick(module.title);
                    }
                  }}
                  tabIndex={0}
                  aria-label={`Learn about ${module.title} module`}
                >
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-foreground" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                      {module.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      aria-label={`Start learning ${module.title}`}
                    >
                      Start Learning
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