import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CtaSection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop)] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary/80" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 leading-tight">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto">
            Let's talk about your goals. Our experts are ready to craft a custom strategy for your business — completely free of charge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-14 px-10 bg-secondary hover:bg-secondary/90 text-white shadow-xl text-base">
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-10 border-2 border-white/30 text-white hover:bg-white/10 text-base"
              onClick={() => window.open("https://wa.me/+919958173726?text=Hello%205SeasSolution%2C%20I%20need%20help%20with%20my%20business.", "_blank")}
            >
              <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
