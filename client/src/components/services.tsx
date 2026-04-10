import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { servicesData } from "@/data/services-data";

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
    <section id="services" className="py-24 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-[hsl(210_20%_92%)] mb-5">
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
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative bg-card rounded-3xl overflow-hidden border border-border/60 shadow-md hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-shadow duration-300 group flex flex-col h-full"
            >
              {/* Top accent line */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"
                style={{ backgroundColor: service.accentHex }}
              />

              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${service.overlayColor} 0%, transparent 60%)` }}
                />
                <span className="absolute top-3 right-4 text-6xl font-extrabold text-white/20 font-display leading-none select-none pointer-events-none">
                  {service.num}
                </span>
                <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl ${service.iconBg} flex items-center justify-center shadow-md backdrop-blur-sm`}>
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h4 className="text-[1.1rem] font-display font-bold text-primary dark:text-[hsl(210_20%_92%)] mb-2.5 leading-snug">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center self-start gap-1.5 text-xs font-bold px-4 py-2 rounded-full border transition-all duration-200 mt-auto hover:-translate-y-0.5"
                  style={{
                    borderColor: `${service.accentHex}33`,
                    color: service.accentHex,
                    backgroundColor: `${service.accentHex}0d`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}1a`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}0d`; }}
                  data-testid={`link-service-card-${service.num}`}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
