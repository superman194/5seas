import { ServicePageLayout } from "@/components/service-page-layout";
import {
  Building2, MapPin, Mail, Phone, Users, Shield, Clock, Headphones,
  CreditCard, Globe,
} from "lucide-react";

export default function VirtualOffice() {
  return (
    <ServicePageLayout
      seoTitle="Virtual Office Services | 5SeasSolution"
      seoDescription="Premium virtual office addresses across India with mail handling, receptionist, and meeting room access."
      badge="Virtual Office"
      title="A Premium Business Address"
      subtitle="Without the Office Overhead"
      heroDescription="Get a prestigious business address in a prime commercial district, professional mail & call handling, and meeting room access — all at a fraction of the cost of a traditional office."
      icon={Building2}
      iconColor="text-indigo-500"
      iconBg="bg-indigo-500/10"
      accentColor="text-indigo-500"
      highlights={[
        { value: "12+ Cities", label: "Premium Locations Available" },
        { value: "₹999/mo", label: "Starting Price" },
        { value: "24 hrs", label: "Setup Time" },
        { value: "100%", label: "Legal & GST Compliant" },
      ]}
      features={[
        {
          title: "Prime Business Address",
          description: "Get a prestigious address in top commercial hubs across India — ideal for GST registration, client meetings, and branding.",
          icon: MapPin,
        },
        {
          title: "Mail & Courier Handling",
          description: "All your letters, packages, and documents are received, scanned, and forwarded to you promptly.",
          icon: Mail,
        },
        {
          title: "Dedicated Phone Number",
          description: "A local business number with professional receptionists who answer calls in your company's name.",
          icon: Phone,
        },
        {
          title: "Meeting Room Access",
          description: "Book fully-equipped conference rooms on demand — impress clients without a permanent lease.",
          icon: Users,
        },
        {
          title: "GST & Legal Compliance",
          description: "Our addresses are approved for GST registration, ROC filings, MSME registration, and all government submissions.",
          icon: Shield,
        },
        {
          title: "Flexible Plans",
          description: "Monthly and annual plans with no long-term commitments. Scale up or down anytime your needs change.",
          icon: CreditCard,
        },
      ]}
      benefitsList={[
        "Establish credibility with a premium business address — instantly.",
        "Reduce overhead costs by up to 90% versus a traditional office.",
        "Fully compliant for GST, ROC, and MSME registrations.",
        "Professional call answering in your company's name — never miss a lead.",
        "Available across 12+ cities including Delhi, Mumbai, Bangalore, Hyderabad.",
        "Setup within 24 hours — no paperwork hassles.",
        "Dedicated account manager for all your needs.",
      ]}
      processSteps={[
        { step: "01", title: "Choose Location", description: "Pick your preferred city and commercial hub from our premium network." },
        { step: "02", title: "Select Plan", description: "Choose a plan that fits your requirements — address only, or with receptionist & meeting room." },
        { step: "03", title: "KYC & Setup", description: "Submit basic documents. Our team verifies and activates your account within 24 hours." },
        { step: "04", title: "Go Live", description: "Start using your address for business registrations, client communication, and more." },
      ]}
    />
  );
}
