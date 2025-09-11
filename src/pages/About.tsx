const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            About Roundtrip Adventure
          </h1>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              Roundtrip Adventure is your trusted companion for discovering extraordinary 
              travel experiences around the globe.
            </p>
            <p>
              We believe that every journey should be memorable, meaningful, and perfectly 
              tailored to your adventurous spirit. Whether you're seeking thrilling outdoor 
              activities, cultural immersion, or peaceful retreats, we're here to help you 
              plan the perfect roundtrip adventure.
            </p>
            <p>
              Our mission is to connect travelers with authentic experiences that create 
              lasting memories and broaden perspectives.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;