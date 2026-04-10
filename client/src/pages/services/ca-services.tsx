import { ServicePageLayout } from "@/components/service-page-layout";
import {
  Calculator, FileText, TrendingUp, Shield, ClipboardList,
  Building, Briefcase, BarChart2,
} from "lucide-react";

export default function CAServices() {
  return (
    <ServicePageLayout
      seoTitle="CA Services | 5SeasSolution"
      seoDescription="Expert chartered accountancy services — GST, ITR, company registration, audit, and financial compliance for startups and SMEs."
      badge="CA Services"
      title="Expert Financial & Tax"
      subtitle="Compliance Made Simple"
      heroDescription="Tired of compliance headaches? Our expert Chartered Accountants handle GST, ITR, company registration, audits, and financial planning — so you can focus entirely on growing your business."
      icon={Calculator}
      iconColor="text-emerald-500"
      iconBg="bg-emerald-500/10"
      accentColor="text-emerald-500"
      highlights={[
        { value: "500+", label: "Filings Completed" },
        { value: "0", label: "Penalties Incurred" },
        { value: "100%", label: "On-Time Compliance" },
        { value: "5+ yrs", label: "CA Experience" },
      ]}
      features={[
        {
          title: "GST Registration & Filing",
          description: "Complete GST registration, monthly/quarterly GSTR filing, reconciliation, and refund claims handled end-to-end.",
          icon: FileText,
        },
        {
          title: "Income Tax Returns",
          description: "Accurate ITR filing for individuals, firms, LLPs, and companies with maximum deduction optimization.",
          icon: TrendingUp,
        },
        {
          title: "Company & LLP Registration",
          description: "Private limited, LLP, OPC, and Pvt Ltd registration with MCA filings, DIN, and DSC included.",
          icon: Building,
        },
        {
          title: "Statutory Audit",
          description: "Comprehensive statutory and internal audits that ensure regulatory compliance and stakeholder trust.",
          icon: Shield,
        },
        {
          title: "Bookkeeping & Accounting",
          description: "Monthly/quarterly bookkeeping, P&L preparation, balance sheets, and cash flow statements.",
          icon: ClipboardList,
        },
        {
          title: "Financial Advisory",
          description: "Strategic guidance on fundraising, valuations, ESOP structuring, and tax-efficient business planning.",
          icon: BarChart2,
        },
      ]}
      benefitsList={[
        "Avoid penalties — zero missed deadlines with our proactive reminder system.",
        "Save up to 35% in taxes through expert deduction planning.",
        "Dedicated CA assigned to your account — always reachable.",
        "Transparent fixed pricing — no surprise charges.",
        "All work done digitally — upload documents, track progress online.",
        "5+ years of experience handling startups, SMEs, and large enterprises.",
        "Instant response to government notices and assessments.",
      ]}
      processSteps={[
        { step: "01", title: "Initial Consultation", description: "Free call to understand your business structure and compliance needs." },
        { step: "02", title: "Document Collection", description: "Secure digital portal for sharing your documents — simple and fast." },
        { step: "03", title: "Processing & Filing", description: "Our CAs prepare, verify, and file everything accurately and on time." },
        { step: "04", title: "Confirmation & Report", description: "You receive filing confirmation and a summary report for your records." },
      ]}
    />
  );
}
