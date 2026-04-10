import { motion } from "framer-motion";
import { Monitor, Megaphone, Building2, Calculator, PenTool, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const servicesData = [
  {
    title: "Virtual Office",
    description: "Premium business addresses, mail handling, and professional receptionist services for a fraction of the cost.",
    icon: Building2,
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-500",
    href: "/services/virtual-office",
  },
  {
    title: "CA Services",
    description: "Expert tax planning, audits, registration, and financial compliance handled by seasoned professionals.",
    icon: Calculator,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500",
    href: "/services/ca-services",
  },
  {
    title: "IT Services",
    description: "Robust infrastructure, software development, and technical support to power your business operations.",
    icon: Monitor,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
    href: "/services/it-services",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven SEO, social media, and paid campaigns to accelerate your growth and visibility.",
    icon: Megaphone,
    color: "from-teal-500/20 to-teal-500/5",
    iconColor: "text-teal-500",
    href: "/services/digital-marketing",
  },
  {
    title: "Designing & Branding",
    description: "Striking UI/UX, brand identity, and graphic design that leaves a lasting impression.",
    icon: PenTool,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
    href: "/services/branding",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
              <Link
                href={service.href}
                className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors mt-auto"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
