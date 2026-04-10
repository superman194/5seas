import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { motion } from "framer-motion";

const COMPANY = "5SeasSolution";
const EMAIL = "5seassolution@gmail.com";
const PHONE = "+91 99581 73726";
const EFFECTIVE_DATE = "January 1, 2024";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the website or services of ${COMPANY}, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree to these terms, please discontinue use of our services immediately.`,
  },
  {
    title: "2. Services Offered",
    content: `${COMPANY} provides a range of business consultancy services including but not limited to: Virtual Office solutions, Chartered Accountancy (CA) services, IT infrastructure and software development, Digital Marketing, and Designing & Branding. The scope of each engagement is defined separately in a service agreement or proposal.`,
  },
  {
    title: "3. Client Responsibilities",
    content: `Clients are responsible for providing accurate, complete, and timely information required for service delivery. Any delays or inaccuracies in information provided may affect service timelines. ${COMPANY} is not liable for consequences arising from incorrect or incomplete information furnished by the client.`,
  },
  {
    title: "4. Payment Terms",
    content: `Fees for services are outlined in the respective service agreement or invoice. Payment is due as specified therein. ${COMPANY} reserves the right to suspend or terminate services in the event of non-payment. All prices are exclusive of applicable government taxes (GST) unless stated otherwise.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All original work product, designs, software, strategies, and documents created by ${COMPANY} remain the intellectual property of ${COMPANY} until full payment is received. Upon payment, agreed deliverables transfer to the client as outlined in the service contract.`,
  },
  {
    title: "6. Confidentiality",
    content: `Both parties agree to maintain the confidentiality of proprietary or sensitive business information shared during the course of engagement. ${COMPANY} will not disclose client information to third parties without explicit consent, except where required by law or regulation.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `${COMPANY} shall not be liable for indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services. Our total cumulative liability to any client shall not exceed the fees paid by that client in the three months preceding the claim.`,
  },
  {
    title: "8. Third-Party Services",
    content: `Certain services may involve third-party platforms, tools, or vendors (e.g., Google Ads, hosting providers, accounting software). ${COMPANY} is not responsible for the performance, availability, or terms of these third-party services.`,
  },
  {
    title: "9. Termination",
    content: `Either party may terminate a service engagement with reasonable written notice as specified in the service agreement. Upon termination, outstanding fees become immediately payable, and ${COMPANY} will deliver all completed work to the client.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of courts in Delhi NCR, India.`,
  },
  {
    title: "11. Modifications",
    content: `${COMPANY} reserves the right to modify these Terms at any time. Updated terms will be posted on this page with a revised effective date. Continued use of our services after changes constitutes acceptance of the new terms.`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-secondary bg-white border border-border/50 px-4 py-1.5 rounded-full mb-5 shadow-sm">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Effective Date: {EFFECTIVE_DATE}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-border/50 shadow-lg p-8 md:p-12 space-y-10">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Please read these Terms & Conditions carefully before using the services of {COMPANY}. These terms constitute a legally binding agreement between you and {COMPANY}.
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
              <h2 className="text-xl font-display font-bold text-primary mb-3">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">For questions regarding these Terms & Conditions, contact us at:</p>
              <div className="bg-muted/30 rounded-2xl p-5 space-y-2 text-sm text-foreground/80">
                <p><span className="font-semibold">{COMPANY}</span></p>
                <p>Email: <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline">{EMAIL}</a></p>
                <p>Phone: <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-secondary hover:underline">{PHONE}</a></p>
                <p>Location: Delhi NCR, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
