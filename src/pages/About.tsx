import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, BookOpen, Code, Lightbulb, FileText } from "lucide-react";

const About = () => {
  const learningPrinciples = [
    {
      icon: Target,
      title: "Hands-on Practice",
      description: "Learn by building real projects that solve actual problems and demonstrate practical skills."
    },
    {
      icon: BookOpen,
      title: "Progressive Learning",
      description: "Start with fundamentals and gradually advance to complex concepts at a comfortable pace."
    },
    {
      icon: Code,
      title: "Modern Tools",
      description: "Focus on current industry standards and tools that are actively used in professional development."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Develop critical thinking skills by tackling challenges and debugging real-world issues."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Track progress, document learnings, and build a portfolio of completed projects and insights."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              About This Learning Journey
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A personal platform for mastering web development through practice and documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border shadow-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Learning Philosophy
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Building skills through intentional practice and reflection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  This platform serves as a personal laboratory for web development learning. 
                  The goal is to master modern development practices through hands-on experience, 
                  building real applications while documenting insights and progress along the way.
                </p>
                <p className="leading-relaxed">
                  Every project becomes a learning opportunity to explore new technologies, 
                  understand best practices, and develop problem-solving skills. From React fundamentals 
                  to advanced backend concepts, each component built here represents a step forward 
                  in understanding how modern web applications work.
                </p>
                <p className="leading-relaxed">
                  The approach emphasizes practical application over theoretical knowledge, 
                  encouraging experimentation and iteration. Mistakes become valuable learning moments, 
                  and each successful implementation builds confidence for tackling more complex challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Principles */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Learning Principles
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Core principles that guide the learning process and shape the development approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningPrinciples.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-foreground" />
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

      {/* Learning Goals */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border shadow-sm">
            <CardContent className="p-12 text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Learning Goals
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                "To develop professional-level web development skills through consistent practice, 
                thoughtful experimentation, and continuous learning while building a portfolio 
                of meaningful projects that demonstrate real-world capabilities."
              </p>
              <div className="pt-6">
                <Button 
                  asChild 
                  size="lg" 
                  className="px-8 py-4 text-lg font-medium"
                >
                  <Link to="/">Continue Learning</Link>
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