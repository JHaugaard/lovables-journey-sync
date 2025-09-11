const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Welcome to Roundtrip Adventure
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing travel destinations and plan your perfect adventure. 
            Start exploring the world with our curated travel experiences.
          </p>
          <div className="mt-8">
            <p className="text-muted-foreground">
              This is the Home page - your gateway to adventure awaits!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;