import { motion } from "framer-motion";
import { Monitor, Megaphone, Building2, Calculator, PenTool, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const servicesData = [
  {
    title: "Virtual Office",
    description: "Premium business addresses, mail handling, and professional receptionist services for a fraction of the cost.",
    icon: Building2,
    iconColor: "text-indigo-500",
    href: "/services/virtual-office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Modern virtual office space",
  },
  {
    title: "CA Services",
    description: "Expert tax planning, audits, registration, and financial compliance handled by seasoned professionals.",
    icon: Calculator,
    iconColor: "text-emerald-500",
    href: "/services/ca-services",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Financial accounting and CA services",
  },
  {
    title: "IT Services",
    description: "Robust infrastructure, software development, and technical support to power your business operations.",
    icon: Monitor,
    iconColor: "text-blue-500",
    href: "/services/it-services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=70&auto=format&fit=crop",
    imageAlt: "IT infrastructure and technology services",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven SEO, social media, and paid campaigns to accelerate your growth and visibility.",
    icon: Megaphone,
    iconColor: "text-teal-500",
    href: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Digital marketing and social media campaigns",
  },
  {
    title: "Designing & Branding",
    description: "Striking UI/UX, brand identity, and graphic design that leaves a lasting impression.",
    icon: PenTool,
    iconColor: "text-purple-500",
    href: "/services/branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Creative design and branding workspace",
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
              className="bg-white rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Service image */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
              </div>

              {/* Card content */}
              <div className="p-7 flex flex-col flex-1">
                <h4 className="text-xl font-display font-bold text-primary mb-3">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-bold text-primary group-hover:text-secondary transition-colors mt-auto"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
