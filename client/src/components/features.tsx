import { motion } from "framer-motion";
import { Check, Shield, Zap, TrendingUp, Users, PiggyBank } from "lucide-react";

const features = [
  {
    title: "One-Stop Solution",
    description: "Eliminate the hassle of dealing with multiple vendors. Get everything from IT to CA under one roof.",
    icon: Shield,
  },
  {
    title: "Experienced Professionals",
    description: "Our team consists of industry veterans who bring deep expertise and proven strategies.",
    icon: Users,
  },
  {
    title: "Affordable Pricing",
    description: "Premium services structured with transparent, scalable pricing models for businesses of all sizes.",
    icon: PiggyBank,
  },
  {
    title: "Fast Support",
    description: "Dedicated account managers and rapid response times ensure your operations never halt.",
    icon: Zap,
  },
  {
    title: "Transparent Process",
    description: "Full visibility into workflows, timelines, and reporting. No hidden fees or surprises.",
    icon: TrendingUp,
  },
];

export function Features() {
  return (
    <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop)] bg-cover bg-center opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            The 5SeasSolution Advantage
          </h3>
          <p className="text-lg text-white/70">
            We don't just provide services; we partner with you to build a resilient, scalable foundation for your enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-display mb-3 text-white/80">{feature.title}</h4>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
