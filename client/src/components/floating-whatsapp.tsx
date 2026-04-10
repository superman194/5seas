import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  const handleClick = () => {
    window.open(
      "https://wa.me/+919958173726?text=Hello%205SeasSolution%2C%20I%20am%20interested%20in%20your%20services.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{ isolation: "isolate" }}
    >
      {/* Slow pulse rings — purely decorative */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"
        style={{ animationDuration: "2.2s" }}
        aria-hidden="true"
      />
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-15 animate-ping"
        style={{ animationDuration: "2.2s", animationDelay: "0.55s" }}
        aria-hidden="true"
      />

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 240, damping: 22 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.52)] transition-shadow duration-300"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
        data-testid="button-whatsapp"
      >
        {/* Official WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="26"
          height="26"
          fill="white"
          aria-hidden="true"
        >
          <path d="M4.868 43.303l2.694-9.835a18.953 18.953 0 01-2.54-9.51C5.025 13.514 13.836 4.703 24.78 4.703a18.9 18.9 0 0113.438 5.565 18.9 18.9 0 015.56 13.437c-.004 10.947-8.815 19.758-19.76 19.758a19.01 19.01 0 01-9.08-2.311l-10.07 2.151zm10.685-6.163l.573.34a15.76 15.76 0 008.046 2.204c8.743 0 15.86-7.115 15.863-15.86a15.76 15.76 0 00-4.634-11.196 15.76 15.76 0 00-11.2-4.638c-8.75 0-15.865 7.115-15.867 15.858a15.74 15.74 0 002.418 8.38l.376.597-1.597 5.829 5.022-1.514zm9.24-24.846c-.218-.487-.447-.497-.654-.506-.17-.008-.364-.008-.558-.008a1.07 1.07 0 00-.776.364c-.267.291-1.02 1-1.02 2.43s1.044 2.818 1.19 3.013c.145.194 2.017 3.239 4.962 4.41 2.456 1.01 2.946.82 3.478.77.533-.049 1.717-.7 1.96-1.378.243-.677.243-1.258.17-1.38-.073-.12-.267-.194-.558-.34-.292-.145-1.718-.848-1.985-.944-.267-.097-.461-.145-.655.146-.194.29-.75.944-.92 1.14-.17.194-.34.218-.631.073-.291-.146-1.228-.453-2.34-1.444-.865-.77-1.449-1.72-1.619-2.012-.17-.29-.018-.448.127-.594.13-.13.292-.34.437-.51.146-.17.194-.29.292-.485.097-.194.049-.364-.025-.51l-.847-2.235z" />
        </svg>
      </motion.button>
    </div>
  );
}
