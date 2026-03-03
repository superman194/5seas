import { motion } from "framer-motion";
import { Monitor, Megaphone, Building2, Calculator, PenTool, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    title: "IT Services",
    description: "Robust infrastructure, software development, and technical support to power your business operations.",
    icon: Monitor,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven SEO, social media, and paid campaigns to accelerate your growth and visibility.",
    icon: Megaphone,
    color: "from-teal-500/20 to-teal-500/5",
    iconColor: "text-teal-500"
  },
  {
    title: "Virtual Office",
    description: "Premium business addresses, mail handling, and professional receptionist services.",
    icon: Building2,
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-500"
  },
  {
    title: "CA Services",
    description: "Expert tax planning, audits, registration, and financial compliance handled by seasoned professionals.",
    icon: Calculator,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500"
  },
  {
    title: "Designing & Branding",
    description: "Striking UI/UX, brand identity, and graphic design that leaves a lasting impression.",
    icon: PenTool,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Comprehensive Solutions
          </h3>
          <p className="text-lg text-muted-foreground">
            Everything your business needs to operate flawlessly and scale massively, delivered by industry experts.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <h4 className="text-2xl font-display font-bold text-primary mb-3">
                {service.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <a 
                href="#contact" 
                className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors mt-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
          
          {/* CTA Card in the grid */}
          <motion.div 
            variants={item}
            className="bg-primary rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            
            <h4 className="text-2xl font-display font-bold mb-4 relative z-10">
              Need a Custom Solution?
            </h4>
            <p className="text-white/80 mb-8 relative z-10">
              Talk to our experts about your specific business requirements.
            </p>
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 relative z-10"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us Today
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
