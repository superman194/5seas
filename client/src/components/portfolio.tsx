import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Brand Launch",
    category: "Branding & IT",
    description:
      "End-to-end brand identity, website development, and social media launch for a D2C fashion startup. Achieved 10k followers in 60 days.",
    tags: ["Branding", "Web Dev", "Social Media"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-indigo-500/5",
    accent: "text-indigo-600",
  },
  {
    title: "CA Compliance Overhaul",
    category: "CA Services",
    description:
      "Streamlined GST, ITR, ROC compliance and financial reporting for a 50-employee manufacturing SME saving 40+ hours monthly.",
    tags: ["GST", "ITR Filing", "Audit"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-emerald-500/5",
    accent: "text-emerald-600",
  },
  {
    title: "Digital Marketing Scale-up",
    category: "Digital Marketing",
    description:
      "4x ROAS on Google Ads + organic traffic growth of 320% in 6 months for an ed-tech platform through SEO and content strategy.",
    tags: ["Google Ads", "SEO", "Content"],
    gradient: "from-teal-500/20 via-cyan-500/10 to-teal-500/5",
    accent: "text-teal-600",
  },
  {
    title: "Virtual Office Network",
    category: "Virtual Office",
    description:
      "Set up premium virtual offices for 12 branches of an expanding legal firm across 5 cities, with mail and receptionist services.",
    tags: ["Virtual Office", "Mail Handling", "Multi-city"],
    gradient: "from-blue-500/20 via-sky-500/10 to-blue-500/5",
    accent: "text-blue-600",
  },
  {
    title: "IT Infrastructure Modernization",
    category: "IT Services",
    description:
      "Cloud migration, security hardening, and custom ERP integration for a retail chain with 8 outlets — zero downtime achieved.",
    tags: ["Cloud", "ERP", "Security"],
    gradient: "from-rose-500/20 via-pink-500/10 to-rose-500/5",
    accent: "text-rose-600",
  },
  {
    title: "Real Estate Agency Rebrand",
    category: "Designing & Branding",
    description:
      "Complete visual identity redesign — logo, brochures, website, and social assets — that repositioned the agency in the luxury segment.",
    tags: ["Logo Design", "UI/UX", "Print"],
    gradient: "from-purple-500/20 via-violet-500/10 to-purple-500/5",
    accent: "text-purple-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Portfolio() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Featured Projects
          </h3>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses. A glimpse into what we've built together with our clients.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`relative bg-gradient-to-br ${p.gradient} rounded-3xl p-8 border border-border/40 hover:shadow-xl hover:border-secondary/20 transition-all duration-300 group flex flex-col`}
            >
              <span className={`text-xs font-bold uppercase tracking-widest ${p.accent} mb-3 block`}>
                {p.category}
              </span>
              <h4 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                {p.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag, j) => (
                  <span key={j} className="text-xs bg-card/80 border border-border/50 text-foreground/70 px-3 py-1 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-primary/30 hover:border-secondary hover:text-secondary transition-all">
              Discuss Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
