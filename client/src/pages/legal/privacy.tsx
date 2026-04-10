import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

const COMPANY = "5SeasSolution";
const EMAIL = "5seassolution@gmail.com";
const EFFECTIVE_DATE = "January 1, 2024";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you voluntarily provide through our contact forms and service engagements, including: your name, email address, phone number, company name, and details about the services you're inquiring about. We may also automatically collect certain technical data such as browser type, IP address, and pages visited when you use our website.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `The information we collect is used exclusively to: (a) respond to your inquiries and provide requested services; (b) communicate updates, invoices, and service-related notices; (c) improve our website and services; (d) comply with legal and regulatory obligations. We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: "3. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Once information is no longer required, we securely delete or anonymize it. Client project data may be retained for up to 7 years for financial and compliance purposes.`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Cookies & Tracking",
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. You may control cookie settings through your browser. Disabling cookies may affect certain features of the site.`,
  },
  {
    title: "6. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external sites. We encourage you to review the privacy policies of any websites you visit.`,
  },
  {
    title: "7. Your Rights",
    content: `You have the right to: access the personal data we hold about you; request correction of inaccurate data; request deletion of your data (subject to legal retention requirements); withdraw consent to data processing at any time; and lodge a complaint with a data protection authority. To exercise these rights, contact us at the email below.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete it promptly.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date. We encourage you to review this policy periodically to stay informed.`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-secondary bg-card border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Effective Date: {EFFECTIVE_DATE}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl border border-border/50 shadow-lg p-8 md:p-12 space-y-10">
            <p className="text-muted-foreground leading-relaxed text-lg">
              At {COMPANY}, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you interact with our website and services.
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
              <h2 className="text-xl font-display font-bold text-primary mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">For privacy-related queries or to exercise your rights, contact our Data Protection team:</p>
              <div className="bg-muted/30 rounded-2xl p-5 space-y-2 text-sm text-foreground/80">
                <p><span className="font-semibold">{COMPANY} — Privacy Team</span></p>
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
