import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const COMPANY = "5SeasSolution";
const EMAIL = "5seassolution@gmail.com";
const EFFECTIVE_DATE = "January 1, 2024";

const sections = [
  {
    title: "1. General Disclaimer",
    content: `The information provided on this website by ${COMPANY} is for general informational purposes only. While we strive to keep the information accurate and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, suitability, or availability of the website content.`,
  },
  {
    title: "2. No Professional Advice",
    content: `Content published on this website does not constitute professional legal, financial, tax, or investment advice. Any reliance you place on such information is strictly at your own risk. For specific advice tailored to your situation, please engage directly with our qualified professionals through a formal service agreement.`,
  },
  {
    title: "3. CA & Financial Services Disclaimer",
    content: `While ${COMPANY} employs qualified Chartered Accountants, information provided on this website relating to taxation, compliance, or financial matters is general in nature and may not apply to your specific circumstances. Tax laws change frequently; always consult directly with our team for current, situation-specific guidance.`,
  },
  {
    title: "4. Digital Marketing Results",
    content: `Results referenced on this website regarding SEO rankings, social media growth, advertising ROI, or other digital marketing metrics are illustrative examples based on past client outcomes. Results may vary significantly based on industry, budget, competition, market conditions, and other factors. We do not guarantee specific outcomes.`,
  },
  {
    title: "5. IT & Technology Services",
    content: `${COMPANY} provides IT services and solutions to the best of our team's ability. However, we cannot guarantee uninterrupted service, complete freedom from bugs, or that systems will meet all your requirements in every circumstance. Technology services are provided subject to third-party platform availability and limitations.`,
  },
  {
    title: "6. Third-Party Content & Links",
    content: `Our website may reference or link to third-party websites, tools, or services. ${COMPANY} does not endorse, control, or take responsibility for the content, accuracy, or practices of any third-party site. These links are provided for convenience only.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the fullest extent permitted by law, ${COMPANY} excludes all liability for loss or damage — whether direct, indirect, consequential, or incidental — arising from the use of, or reliance on, information published on this website or through any services provided.`,
  },
  {
    title: "8. Accuracy of Information",
    content: `We endeavour to maintain accurate and current information on this website. However, ${COMPANY} reserves the right to modify, add, or remove content at any time without notice. We do not guarantee that all information is current or error-free.`,
  },
];

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-secondary bg-card border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Disclaimer</h1>
            <p className="text-muted-foreground">Effective Date: {EFFECTIVE_DATE}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border/50 shadow-lg p-8 md:p-12 space-y-10">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Please read this disclaimer carefully before using the website or engaging with the services of {COMPANY}. By using our website, you acknowledge and agree to the terms set out below.
            </p>

            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <h2 className="text-xl font-display font-bold text-primary mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </motion.div>
            ))}

            <div className="pt-6 border-t border-border/50">
              <h2 className="text-xl font-display font-bold text-primary mb-3">9. Contact Us</h2>
              <p className="text-muted-foreground mb-4">For questions about this disclaimer, contact us at:</p>
              <div className="bg-muted/30 rounded-2xl p-5 space-y-2 text-sm text-foreground/80">
                <p><span className="font-semibold">{COMPANY}</span></p>
                <p>Email: <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline">{EMAIL}</a></p>
                <p>Location: Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
