import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WelcomePopup } from "@/components/welcome-popup";
import { ThemeProvider } from "@/hooks/use-theme";
import { OfflineOverlay } from "@/components/offline-overlay";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

import Home from "@/pages/home";

const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const ServicesPage = lazy(() => import("@/pages/services"));
const VirtualOffice = lazy(() => import("@/pages/services/virtual-office"));
const CAServices = lazy(() => import("@/pages/services/ca-services"));
const ITServices = lazy(() => import("@/pages/services/it-services"));
const DigitalMarketing = lazy(() => import("@/pages/services/digital-marketing"));
const Branding = lazy(() => import("@/pages/services/branding"));
const Terms = lazy(() => import("@/pages/legal/terms"));
const Privacy = lazy(() => import("@/pages/legal/privacy"));
const Disclaimer = lazy(() => import("@/pages/legal/disclaimer"));
const NotFound = lazy(() => import("@/pages/not-found"));

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  duration: 0.22,
  ease: [0.4, 0, 0.2, 1],
};

function Router() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}

function AnimatedRouter() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        style={{ willChange: "opacity, transform" }}
      >
        <Router />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <WelcomePopup />
          <OfflineOverlay />
          <FloatingWhatsApp />
          <AnimatedRouter />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
