import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import VirtualOffice from "@/pages/services/virtual-office";
import CAServices from "@/pages/services/ca-services";
import ITServices from "@/pages/services/it-services";
import DigitalMarketing from "@/pages/services/digital-marketing";
import Branding from "@/pages/services/branding";
import Terms from "@/pages/legal/terms";
import Privacy from "@/pages/legal/privacy";
import Disclaimer from "@/pages/legal/disclaimer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services/virtual-office" component={VirtualOffice} />
      <Route path="/services/ca-services" component={CAServices} />
      <Route path="/services/it-services" component={ITServices} />
      <Route path="/services/digital-marketing" component={DigitalMarketing} />
      <Route path="/services/branding" component={Branding} />
      <Route path="/legal/terms" component={Terms} />
      <Route path="/legal/privacy" component={Privacy} />
      <Route path="/legal/disclaimer" component={Disclaimer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
