import { motion } from "framer-motion";
import { Monitor, Megaphone, Building2, Calculator, PenTool, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const servicesData = [
  {
    num: "01",
    title: "Virtual Office",
    description: "Premium business addresses, mail handling, and professional receptionist services for a fraction of the cost.",
    icon: Building2,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    accentHex: "#6366f1",
    overlayColor: "rgba(79,70,229,0.35)",
    href: "/services/virtual-office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Modern virtual office space",
  },
  {
    num: "02",
    title: "CA Services",
    description: "Expert tax planning, audits, registration, and financial compliance handled by seasoned professionals.",
    icon: Calculator,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    accentHex: "#059669",
    overlayColor: "rgba(5,150,105,0.35)",
    href: "/services/ca-services",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Financial accounting and CA services",
  },
  {
    num: "03",
    title: "IT Services",
    description: "Robust infrastructure, software development, and technical support to power your business operations.",
    icon: Monitor,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    accentHex: "#3b82f6",
    overlayColor: "rgba(59,130,246,0.35)",
    href: "/services/it-services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=70&auto=format&fit=crop",
    imageAlt: "IT infrastructure and technology services",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description: "Data-driven SEO, social media, and paid campaigns to accelerate your growth and visibility.",
    icon: Megaphone,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    accentHex: "#0d9488",
    overlayColor: "rgba(13,148,136,0.35)",
    href: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Digital marketing and social media campaigns",
  },
  {
    num: "05",
    title: "Designing & Branding",
    description: "Striking UI/UX, brand identity, and graphic design that leaves a lasting impression.",
    icon: PenTool,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    accentHex: "#8b5cf6",
    overlayColor: "rgba(139,92,246,0.35)",
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
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-5">
            Comprehensive Solutions
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything your business needs to operate flawlessly and scale massively, delivered by industry experts.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.num}
              variants={item}
              className="relative bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/8 transition-all duration-400 group flex flex-col h-full"
            >
              {/* Hover top accent line */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"
                style={{ backgroundColor: service.accentHex }}
              />

              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Service-colored gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${service.overlayColor} 0%, transparent 60%)`,
                  }}
                />
                {/* Watermark number */}
                <span className="absolute top-3 right-4 text-6xl font-extrabold text-white/20 font-display leading-none select-none pointer-events-none">
                  {service.num}
                </span>
                {/* Icon pill */}
                <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center shadow-md backdrop-blur-sm`}>
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h4 className="text-[1.15rem] font-display font-bold text-primary mb-2.5 group-hover:text-primary transition-colors leading-snug">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center self-start gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 mt-auto"
                  style={{
                    borderColor: `${service.accentHex}33`,
                    color: service.accentHex,
                    backgroundColor: `${service.accentHex}0d`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}1a`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}0d`;
                  }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
