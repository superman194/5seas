import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Award, Briefcase } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaSection } from "@/components/cta-section";
import { servicesData } from "@/data/services-data";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Award, value: "8+", label: "Years of Expertise" },
  { icon: Briefcase, value: "5", label: "Core Services" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pt-36 pb-14 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <span className="text-border">/</span>
            <span className="text-secondary font-medium">Services</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Our Expertise
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary dark:text-gray-100 leading-[1.1] mb-4">
                Comprehensive<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-500">
                  Business Solutions
                </span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Everything your business needs — IT, Marketing, CA, Virtual Office & Creative Services — delivered by industry experts with a proven track record.
              </p>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-row lg:flex-col gap-6 lg:gap-5 shrink-0"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 lg:justify-end">
                  <div className="text-right">
                    <div className="text-2xl font-display font-extrabold text-primary dark:text-gray-100 leading-none">{value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services list ─────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {servicesData.map((service, i) => (
              <motion.div
                key={service.num}
                variants={item}
                className="group relative flex flex-col lg:flex-row bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-black/30 transition-all duration-300"
              >
                {/* Accent left bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: service.accentHex }}
                />

                {/* Image */}
                <div
                  className={`relative lg:w-[38%] h-56 lg:h-auto overflow-hidden flex-shrink-0 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${service.overlayColor} 0%, rgba(0,0,0,0.25) 100%)` }}
                  />
                  {/* Number watermark */}
                  <span className="absolute bottom-2 right-4 text-7xl font-extrabold text-white/15 font-display leading-none select-none pointer-events-none">
                    {service.num}
                  </span>
                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 w-11 h-11 rounded-xl ${service.iconBg} flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                    <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 px-8 py-8 flex flex-col justify-between ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{ color: service.accentHex, backgroundColor: `${service.accentHex}18` }}
                      >
                        Service {service.num}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-bold text-primary dark:text-gray-100 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                      style={{ backgroundImage: `linear-gradient(to right, hsl(var(--primary)), ${service.accentHex})` }}
                    >
                      {service.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground/75">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: service.accentHex }}
                          />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 self-start text-sm font-bold px-5 py-2.5 rounded-full border transition-all duration-200"
                    style={{
                      borderColor: `${service.accentHex}40`,
                      color: service.accentHex,
                      backgroundColor: `${service.accentHex}10`,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}20`; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = `${service.accentHex}10`; }}
                  >
                    Explore {service.title}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
