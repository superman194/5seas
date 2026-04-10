import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface PageLoaderProps {
  delay?: number;
}

export function PageLoader({ delay = 220 }: PageLoaderProps) {
  const [visible, setVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#0b1220",
          }}
          aria-label="Loading page"
          role="status"
        >
          <div style={{ position: "relative", width: 88, height: 88 }}>
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "#17b585",
                borderRightColor: "#17b585",
              }}
            />
            {/* Inner counter-spinning ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: 8,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderBottomColor: "#17b585",
                opacity: 0.4,
              }}
            />
            {/* Logo badge */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#fff",
                letterSpacing: "-0.5px",
              }}
            >
              5S
            </div>
          </div>

          <p
            style={{
              marginTop: 20,
              fontFamily: "'Outfit', sans-serif",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.38)",
              textTransform: "uppercase",
            }}
          >
            Loading…
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
