import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaSection } from "@/components/cta-section";
import { Stats } from "@/components/stats";
import { motion } from "framer-motion";
import { Check, Target, Eye, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK", color: "bg-primary" },
  { name: "Priya Sharma", role: "Head of CA Services", initials: "PS", color: "bg-emerald-500" },
  { name: "Ankit Verma", role: "Lead Digital Marketer", initials: "AV", color: "bg-teal-500" },
  { name: "Neha Gupta", role: "Creative Director", initials: "NG", color: "bg-purple-500" },
];

const values = [
  { title: "Client First", icon: Heart, description: "Every decision we make starts with one question: is this the best outcome for our client?" },
  { title: "Transparency", icon: Eye, description: "No hidden fees, no fine print. We communicate openly at every step of your journey." },
  { title: "Excellence", icon: Target, description: "We don't settle for good enough. Every deliverable is crafted to meet the highest standard." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-sm font-bold uppercase tracking-wider text-secondary bg-card border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight mb-6">
                Your Partner in
                <span className="block text-secondary">Business Growth</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                5SeasSolution was born from a simple belief: every business deserves access to the best expertise without the enterprise price tag.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're a multi-service consultancy that combines Chartered Accountancy, IT excellence, creative design, digital marketing, and virtual office infrastructure — all under one roof, all working together for your success.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-secondary text-white text-base">
                  Work With Us <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
              <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-xl">
                <h3 className="text-xl font-bold text-primary mb-6">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  {[
                    "Founded on the principle of accessible excellence",
                    "5+ years serving 100+ clients across India",
                    "One dedicated team handling all your needs",
                    "Digital-first approach with human touch",
                    "Transparent pricing — no surprises",
                    "Sector experience: startups, SMEs, and enterprises",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-secondary" />
                      </div>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground">We don't just run a business — we're driven by a purpose to empower every business we work with.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted/30 rounded-3xl p-8 border border-border/40 text-center hover:bg-card hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-center text-white"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              To be the most trusted business partner for startups, SMEs, and enterprises — empowering them to operate efficiently, grow strategically, and scale confidently by delivering world-class services that were once only accessible to the largest corporations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground">A diverse team of experts united by a shared commitment to your success.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-border/50 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-full ${m.color} text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                  {m.initials}
                </div>
                <h4 className="font-bold text-foreground">{m.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
