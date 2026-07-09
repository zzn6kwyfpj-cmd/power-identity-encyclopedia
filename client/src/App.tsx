import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ChapterPage from "./pages/ChapterPage";
import FiguresPage from "./pages/FiguresPage";
import TimelinePage from "./pages/TimelinePage";
import BibliographyPage from "./pages/BibliographyPage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import ResourcesPage from "./pages/ResourcesPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chapter/:slug" component={ChapterPage} />
      <Route path="/figures" component={FiguresPage} />
      <Route path="/timeline" component={TimelinePage} />
      <Route path="/bibliography" component={BibliographyPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
