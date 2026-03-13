/*
 * APP – Avv. Giulia Giacinti
 * Design: Minimalismo Nordico Istituzionale
 * Layout: Navbar fissa + contenuto + Footer
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Pages
import Home from "./pages/Home";
import ChiSono from "./pages/ChiSono";
import AreeDiAttivita from "./pages/AreeDiAttivita";
import CodiceRosso from "./pages/CodiceRosso";
import DirittoDiFamiglia from "./pages/DirittoDiFamiglia";
import CasiApproccio from "./pages/CasiApproccio";
import Credenziali from "./pages/Credenziali";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

function Layout({ children }: { children: React.ReactNode }) {
  useScrollToTop();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/chi-sono" component={ChiSono} />
        <Route path="/aree-di-attivita" component={AreeDiAttivita} />
        <Route path="/codice-rosso" component={CodiceRosso} />
        <Route path="/diritto-di-famiglia" component={DirittoDiFamiglia} />
        <Route path="/casi-e-approccio" component={CasiApproccio} />
        <Route path="/credenziali" component={Credenziali} />
        <Route path="/contatti" component={Contatti} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
