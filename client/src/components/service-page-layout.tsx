import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaSection } from "@/components/cta-section";
import type { LucideIcon } from "lucide-react";

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceHighlight {
  label: string;
  value: string;
}

export interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  accentColor: string;
  features: ServiceFeature[];
  highlights: ServiceHighlight[];
  benefitsList: string[];
  processSteps: { step: string; title: string; description: string }[];
  seoTitle: string;
  seoDescription: string;
}

export function ServicePageLayout({
  badge,
  title,
  subtitle,
  heroDescription,
  heroImage,
  heroImageAlt,
  icon: Icon,
  iconColor,
  iconBg,
  accentColor,
  features,
  highlights,
  benefitsList,
  processSteps,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className={`inline-block text-sm font-bold uppercase tracking-wider ${accentColor} bg-white border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm`}>
                {badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight mb-6">
                {title}
                <span className={`block ${accentColor}`}>{subtitle}</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-secondary text-white text-base transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 border-2 border-border/60 hover:border-secondary hover:text-secondary text-base transition-all"
                  onClick={() => window.open("https://wa.me/+919958173726", "_blank")}
                >
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Mobile stats strip */}
              <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
                {highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 border border-border/50 shadow">
                    <p className={`text-2xl font-display font-extrabold ${accentColor}`}>{h.value}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">{h.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Desktop: hero image with floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/30">
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-border/40">
                <p className={`text-3xl font-display font-extrabold ${accentColor}`}>{highlights[0]?.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{highlights[0]?.label}</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-border/40">
                <p className={`text-3xl font-display font-extrabold ${accentColor}`}>{highlights[1]?.value}</p>
                <p className="text-sm text-muted-foreground font-medium">{highlights[1]?.label}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground">Comprehensive services designed to solve every aspect of your business challenge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-muted/30 rounded-3xl p-7 border border-border/40 hover:bg-white hover:shadow-xl hover:border-border/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-bold font-display text-primary mb-2 group-hover:text-secondary transition-colors">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + image */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Choose Us?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                We combine deep expertise with a client-first approach to deliver results that matter.
              </p>
              <ul className="space-y-3.5">
                {benefitsList.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className={`w-3.5 h-3.5 ${iconColor}`} />
                    </div>
                    <span className="text-foreground/80 leading-relaxed">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
              {/* Image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-border/30">
                <img src={heroImage} alt={heroImageAlt} className="w-full h-64 object-cover" loading="lazy" />
              </div>
              {/* CTA card */}
              <div className="bg-white rounded-3xl p-7 border border-border/50 shadow-lg">
                <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">Ready to Get Started?</h3>
                <p className="text-muted-foreground text-sm mb-5">Schedule a free consultation. No commitments, just clarity.</p>
                <Link href="/contact">
                  <Button className="w-full h-11 rounded-xl bg-primary hover:bg-secondary text-white transition-colors">
                    Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">A streamlined process designed for efficiency and transparency.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 h-px bg-border/60 z-0" style={{ width: "calc(100% - 3.5rem)", left: "3.5rem" }} />
                )}
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform duration-200`}>
                  <span className={`text-lg font-extrabold ${iconColor}`}>{s.step}</span>
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
