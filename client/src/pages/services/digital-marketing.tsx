import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaSection } from "@/components/cta-section";
import { motion } from "framer-motion";
import { ArrowRight, Check, Search, Share2, DollarSign, BarChart2, Users, Megaphone, Target, TrendingUp, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Dominate Google rankings with technical SEO, content strategy, link building, and local SEO. We deliver sustainable organic growth that compounds over time.",
    items: ["Technical SEO Audit", "Keyword Research & Strategy", "On-Page Optimization", "Link Building", "Local SEO & GMB", "Monthly Ranking Reports"],
    color: "text-teal-500",
    bg: "bg-teal-500/10",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build an engaged community, amplify your brand voice, and turn followers into loyal customers across all major platforms.",
    items: ["Instagram & Facebook Growth", "LinkedIn B2B Strategy", "Content Calendar & Posting", "Community Management", "Influencer Collaborations", "Story & Reel Production"],
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: DollarSign,
    title: "Paid Advertising (Google & Meta)",
    description: "High-performance ad campaigns that maximize your ROAS. From Search to Display to Performance Max — we make every rupee work harder.",
    items: ["Google Search & Display Ads", "Meta (Facebook & Instagram) Ads", "YouTube Video Ads", "Remarketing Campaigns", "A/B Testing & Optimization", "Weekly Performance Reports"],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description: "Data-driven decisions start with clear insights. We set up robust tracking and deliver reports you can actually understand and act on.",
    items: ["Google Analytics 4 Setup", "Conversion Tracking", "Custom Dashboard (Looker Studio)", "UTM & Attribution Modeling", "Competitor Analysis", "Monthly Strategy Reviews"],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

const funnelSteps = [
  {
    stage: "Awareness",
    icon: Globe,
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    description: "SEO content, social media, and display ads bring your brand in front of the right audience at the right moment.",
  },
  {
    stage: "Engagement",
    icon: Users,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    description: "Retargeting, lead magnets, and email nurture sequences keep prospects warm and guide them deeper into your funnel.",
  },
  {
    stage: "Conversion",
    icon: Target,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    description: "High-converting landing pages, WhatsApp follow-ups, and optimized CTAs turn interested visitors into paying customers.",
  },
  {
    stage: "Retention",
    icon: TrendingUp,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description: "Email marketing, loyalty programs, and re-engagement campaigns maximize your customer lifetime value.",
  },
];

const results = [
  { metric: "4x", label: "Average ROAS on Paid Ads" },
  { metric: "320%", label: "Organic Traffic Growth" },
  { metric: "60 days", label: "To First Qualified Leads" },
  { metric: "50+", label: "Brands Scaled" },
];

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-500/5 via-background to-blue-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-sm font-bold uppercase tracking-wider text-teal-500 bg-white border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm">
                Digital Marketing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight mb-6">
                Grow Your Business
                <span className="block text-teal-500">Digitally & Profitably</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Data-driven SEO, social media, paid ads, and lead generation strategies that bring qualified customers to your door — consistently and scalably.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-teal-600 text-white text-base">
                    Get Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-2 border-border/60 hover:border-teal-500 hover:text-teal-600 text-base"
                  onClick={() => window.open("https://wa.me/+919958173726", "_blank")}>
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {results.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-border/50 shadow-lg text-center">
                  <p className="text-4xl font-display font-extrabold text-teal-500 mb-1">{r.metric}</p>
                  <p className="text-sm text-muted-foreground font-medium">{r.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Digital Marketing Services</h2>
            <p className="text-lg text-muted-foreground">A full-spectrum approach to growing your online presence and revenue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-muted/30 rounded-3xl p-8 border border-border/40 hover:bg-white hover:shadow-xl hover:border-border/60 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center mb-5`}>
                  <s.icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <Check className={`w-4 h-4 ${s.color} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Funnel */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Lead Generation Funnel</h2>
            <p className="text-lg text-muted-foreground">
              We don't just drive traffic — we build a complete customer acquisition engine that fills your pipeline 24/7.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {funnelSteps.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-3xl p-7 border border-border/50 shadow-lg text-center relative"
              >
                {i < funnelSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-6 z-10">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-4 mx-auto`}>
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${f.color} mb-2 block`}>{f.stage}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Why Businesses Choose Us for Digital Marketing</h2>
              <ul className="space-y-4">
                {[
                  "Certified Google & Meta Ads partners with proven track records.",
                  "No vanity metrics — we focus on revenue, leads, and ROI.",
                  "Dedicated account manager + weekly performance reviews.",
                  "Transparent reporting — you always know where your money goes.",
                  "Integrated strategy: SEO + Paid + Social working together.",
                  "Industry experience across e-commerce, B2B, SaaS, and local businesses.",
                  "No long-term lock-in contracts — results speak for themselves.",
                ].map((b, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal-500" />
                    </div>
                    <span className="text-foreground/80">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-6">
                  <Megaphone className="w-8 h-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Get a Free Marketing Audit</h3>
                <p className="text-muted-foreground mb-6">
                  We'll analyze your current digital presence and show you exactly where you're leaving money on the table — no charge.
                </p>
                <Link href="/contact">
                  <Button className="w-full h-12 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-base">
                    Book Free Audit <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
