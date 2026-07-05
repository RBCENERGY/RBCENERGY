import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Leistungen from "@/pages/Leistungen";
import Projekte from "@/pages/Projekte";
import Industrie from "@/pages/Industrie";
import Kommunen from "@/pages/Kommunen";
import Foerdermittel from "@/pages/Foerdermittel";
import Unternehmen from "@/pages/Unternehmen";
import News from "@/pages/News";
import Kontakt from "@/pages/Kontakt";
import Impressum from "@/pages/Impressum";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/leistungen" component={Leistungen} />
      <Route path="/projekte" component={Projekte} />
      <Route path="/industrie" component={Industrie} />
      <Route path="/kommunen" component={Kommunen} />
      <Route path="/foerdermittel" component={Foerdermittel} />
      <Route path="/unternehmen" component={Unternehmen} />
      <Route path="/news" component={News} />
      <Route path="/kontakt" component={Kontakt} />
      <Route path="/impressum" component={Impressum} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
