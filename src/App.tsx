import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import { SkipToContent } from "./components/SkipToContent";
import { StructuredData } from "./components/StructuredData";
import { Analytics } from "./components/Analytics";
import { usePerformance } from "./hooks/usePerformance";
import { FocusManager } from "./components/FocusManager";

const queryClient = new QueryClient();

const App = () => {
  // Track performance metrics
  usePerformance();

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SkipToContent />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <FocusManager />
            <main id="main-content" tabIndex={-1} className="focus:outline-none">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Analytics enabled={false} /> {/* Set to true when you have a tracking ID */}
          </BrowserRouter>
          <StructuredData />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
