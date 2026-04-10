import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaSection } from "@/components/cta-section";
import { servicesData } from "@/data/services-data";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-bold text-secondary uppercase tracking-widest bg-white border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-primary leading-tight mb-5">
              Comprehensive<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Business Solutions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything your business needs to operate flawlessly and scale massively — IT, Marketing, CA, Virtual Office &amp; Creative Services, delivered by industry experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.num}
                variants={item}
                className="relative bg-white rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/8 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Hover accent top line */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"
                  style={{ backgroundColor: service.accentHex }}
                />

                {/* Image */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
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
                  <h2 className="text-xl font-display font-bold text-primary mb-2.5 leading-snug">
                    {service.title}
                  </h2>
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
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}1a`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}0d`; }}
                  >
                    View Service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
