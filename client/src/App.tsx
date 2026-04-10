import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WelcomePopup } from "@/components/welcome-popup";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import ServicesPage from "@/pages/services";
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
      <Route path="/services" component={ServicesPage} />
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

function AnimatedRouter() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Router />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WelcomePopup />
        <AnimatedRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
