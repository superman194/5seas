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
  icon: Icon,
  iconColor,
  iconBg,
  accentColor,
  features,
  highlights,
  benefitsList,
  processSteps,
  seoTitle,
  seoDescription,
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
                  <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-secondary text-white text-base">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-8 border-2 border-border/60 hover:border-secondary hover:text-secondary text-base"
                  onClick={() => window.open("https://wa.me/+919958173726", "_blank")}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {highlights.map((h, i) => (
                <div key={i} className={`${i === 0 ? "col-span-2" : ""} bg-white rounded-2xl p-6 border border-border/50 shadow-lg`}>
                  <p className={`text-3xl font-display font-extrabold ${accentColor} mb-1`}>{h.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{h.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground">Comprehensive services designed to solve every aspect of your business challenge.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-muted/30 rounded-3xl p-7 border border-border/40 hover:bg-white hover:shadow-lg hover:border-border/60 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}>
                  <f.icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-lg font-bold font-display text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Why Choose Us for This Service?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                We combine deep expertise with a client-first approach to deliver results that matter. Here's what sets us apart:
              </p>
              <ul className="space-y-4">
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

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-xl">
                <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a free consultation with our experts. No commitments, just clarity.
                </p>
                <Link href="/contact">
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-white text-base">
                    Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
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
                className="relative"
              >
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-full h-px bg-border/60 z-0" style={{ width: "calc(100% - 3.5rem)", left: "3.5rem" }} />
                )}
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-4 relative z-10`}>
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
