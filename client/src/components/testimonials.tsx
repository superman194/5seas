import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechNest Startup",
    feedback:
      "5SeasSolution handled our GST registration, IT setup, and branding — all at once. Their team is incredibly professional and the turnaround time was remarkable.",
    rating: 5,
    initials: "RS",
    color: "bg-indigo-500",
  },
  {
    name: "Priya Mehta",
    role: "Director, GreenLeaf SME",
    feedback:
      "Our social media presence went from zero to generating real leads within 3 months. Their digital marketing team truly understands what businesses need.",
    rating: 5,
    initials: "PM",
    color: "bg-teal-500",
  },
  {
    name: "Arjun Kapoor",
    role: "CEO, UrbanVentures",
    feedback:
      "We got a virtual office address in a premium locality that gave us credibility with clients instantly. Affordable and completely hassle-free.",
    rating: 5,
    initials: "AK",
    color: "bg-emerald-500",
  },
  {
    name: "Sneha Patel",
    role: "Co-founder, BrandBloom",
    feedback:
      "The branding and logo design they delivered perfectly captured our identity. We've received countless compliments from investors and partners.",
    rating: 5,
    initials: "SP",
    color: "bg-purple-500",
  },
  {
    name: "Vikram Nair",
    role: "Owner, SwiftRetail",
    feedback:
      "CA compliance was always a headache. Now 5SeasSolution manages all our filings and audits. I can sleep peacefully and focus on growth.",
    rating: 5,
    initials: "VN",
    color: "bg-blue-500",
  },
  {
    name: "Anjali Singh",
    role: "Marketing Head, ScaleUp Inc.",
    feedback:
      "Their Google Ads campaigns gave us a 4x ROAS in the first month. The analytics dashboard they set up keeps us fully informed at all times.",
    rating: 5,
    initials: "AS",
    color: "bg-rose-500",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">Client Stories</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Trusted by Businesses That Scale
          </h3>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — here's what our clients have to say about working with 5SeasSolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl hover:border-secondary/20 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 flex-grow italic">"{t.feedback}"</p>
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${t.color} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
