import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-border/50 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=75&auto=format&fit=crop"
                  alt="Professional business team at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-4xl font-display font-extrabold leading-none">5+</div>
                  <div className="text-sm font-medium opacity-80 mt-1">Premium Services</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-8 -right-8 bg-card p-5 rounded-2xl shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Trusted Partner</p>
                    <p className="text-xs text-muted-foreground">For modern businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 leading-tight">
              Empowering Businesses to <span className="text-secondary">Scale with Confidence</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              5SeasSolution is a multi-service business consultancy providing complete digital and compliance solutions for startups, SMEs, and enterprises. 
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We bridge the gap between technical execution and business strategy. From your first IT infrastructure setup to continuous digital marketing, virtual office management, CA compliance, and stunning brand design—we cover all bases so you can focus on what matters most: your vision.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "Startups & SMEs",
                "Enterprise Solutions",
                "End-to-End Compliance",
                "Digital Transformation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
