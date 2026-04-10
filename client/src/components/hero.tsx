import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const badges = [
  "100+ Happy Clients",
  "5+ Years Experience",
  "All-in-One Solutions",
];

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid-pattern">
      {/* Light/dark adaptive gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 border border-secondary/20">
              Complete Business Consultancy
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-primary dark:text-[hsl(210_20%_92%)] leading-tight mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            All Business Solutions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Under One Roof
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            IT, Marketing, CA, Virtual Office & Creative Services. We help startups, SMEs, and enterprises grow, operate, and scale with confidence.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {badges.map((b, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-sm text-muted-foreground bg-card border border-border/60 px-3 py-1.5 rounded-full shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" /> {b}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base rounded-full h-14 px-8 bg-primary hover:bg-secondary text-white shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
              onClick={scrollToContact}
              data-testid="button-get-consultation"
            >
              Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base rounded-full h-14 px-8 border-2 border-secondary/30 text-secondary hover:bg-secondary/5 hover:border-secondary hover:-translate-y-1 transition-all"
              onClick={() => window.open("https://wa.me/+919958173726?text=Hello%205SeasSolution%2C%20I%20am%20interested%20in%20your%20services.", "_blank")}
              data-testid="button-whatsapp"
            >
              <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
