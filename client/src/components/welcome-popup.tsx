import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const STORAGE_KEY = "5seas_welcomed_v1";
const DURATION = 5000;

export function WelcomePopup() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const show = setTimeout(() => setVisible(true), 700);
      return () => clearTimeout(show);
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Mark as seen immediately so it never shows again
    localStorage.setItem(STORAGE_KEY, "1");

    // Auto-dismiss after DURATION
    const autoDismiss = setTimeout(() => setVisible(false), DURATION);

    // Progress bar: tick every 50ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev - (50 / DURATION) * 100;
        return next <= 0 ? 0 : next;
      });
    }, 50);

    return () => {
      clearTimeout(autoDismiss);
      clearInterval(interval);
    };
  }, [visible]);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(10,18,38,0.65)", backdropFilter: "blur(8px)" }}
          onClick={dismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #0f2a2a 50%, #0f172a 100%)",
              boxShadow: "0 0 0 1px rgba(20,184,166,0.2), 0 32px 64px -12px rgba(0,0,0,0.7), 0 0 80px -20px rgba(20,184,166,0.25)",
            }}
          >
            {/* Subtle glow orb top-right */}
            <div
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)" }}
            />
            {/* Subtle glow orb bottom-left */}
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
            />

            {/* Progress bar */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-white/10 rounded-t-3xl overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #14b8a6, #6366f1)",
                  transition: "width 50ms linear",
                }}
              />
            </div>

            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all z-10"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative px-8 pt-9 pb-8">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  5S
                </div>
                <span className="font-display font-bold text-lg text-white">
                  5Seas<span className="text-secondary">Solution</span>
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.3)" }}
              >
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>

              <h2 className="text-[1.6rem] font-display font-extrabold text-white mb-3 leading-snug">
                Welcome to<br />5SeasSolution
              </h2>
              <p className="text-white/55 leading-relaxed mb-7 text-sm">
                Your all-in-one partner for premium IT, Marketing, CA, Virtual Office &amp; Creative Services — helping businesses grow with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" onClick={dismiss} className="flex-1">
                  <Button
                    className="w-full h-11 rounded-xl font-semibold text-white transition-all"
                    style={{ background: "linear-gradient(135deg, #14b8a6, #0d9488)" }}
                  >
                    Get Free Consultation
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  onClick={dismiss}
                  className="flex-1 h-11 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all border border-white/10"
                >
                  Explore First
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
