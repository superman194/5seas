import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const STORAGE_KEY = "5seas_welcomed_v1";

export function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      // Small delay so page renders first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(15,23,42,0.6)", backdropFilter: "blur(6px)" }}
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Top accent strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted transition-colors"
              aria-label="Close welcome message"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="px-8 pt-8 pb-8">
              {/* Logo mark */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  5S
                </div>
                <span className="font-display font-bold text-xl text-primary">
                  5Seas<span className="text-secondary">Solution</span>
                </span>
              </div>

              {/* Sparkle icon */}
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>

              <h2 className="text-2xl font-display font-bold text-primary mb-3 leading-snug">
                Welcome to 5SeasSolution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7 text-sm">
                Your all-in-one partner for premium IT, Marketing, CA, Virtual Office & Creative Services. We help startups, SMEs, and enterprises grow with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" onClick={dismiss} className="flex-1">
                  <Button className="w-full h-11 rounded-xl bg-primary hover:bg-secondary text-white transition-colors font-semibold">
                    Get Free Consultation
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={dismiss}
                  className="flex-1 h-11 rounded-xl border-border/60 text-foreground/70 hover:border-secondary hover:text-secondary transition-colors"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
