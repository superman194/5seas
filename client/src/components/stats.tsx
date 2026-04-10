import { motion } from "framer-motion";
import { Users, Briefcase, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { icon: Briefcase, value: "100+", label: "Projects Delivered", color: "text-teal-500", bg: "bg-teal-500/10" },
  { icon: Award, value: "5+", label: "Years of Excellence", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: Clock, value: "24/7", label: "Dedicated Support", color: "text-blue-500", bg: "bg-blue-500/10" },
];

export function Stats() {
  return (
    <section className="py-16 bg-background border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center`}>
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <p className="text-4xl font-display font-extrabold text-primary">{s.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
