import { ServicePageLayout } from "@/components/service-page-layout";
import { Monitor, Cloud, Lock, Code, Headphones, Database, Wifi } from "lucide-react";

export default function ITServices() {
  return (
    <ServicePageLayout
      seoTitle="IT Services | 5SeasSolution"
      seoDescription="Robust IT solutions — software development, cloud migration, cybersecurity, ERP, and 24/7 tech support."
      badge="IT Services"
      title="Robust Technology Solutions"
      subtitle="That Power Your Business"
      heroDescription="From custom software development and cloud migration to cybersecurity and 24/7 support — we build and maintain the technology backbone your business needs to operate efficiently and scale securely."
      heroImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop"
      heroImageAlt="Developer writing code on multiple monitors"
      icon={Monitor}
      iconColor="text-blue-500"
      iconBg="bg-blue-500/10"
      accentColor="text-blue-500"
      highlights={[
        { value: "50+", label: "Projects Delivered" },
        { value: "99.9%", label: "Uptime Guaranteed" },
        { value: "24/7", label: "Tech Support" },
        { value: "0", label: "Data Breaches" },
      ]}
      features={[
        { title: "Custom Software Development", description: "Web apps, mobile apps, portals, and dashboards built to your exact requirements with modern tech stacks.", icon: Code },
        { title: "Cloud Migration & Management", description: "Seamless migration to AWS, Azure, or GCP with ongoing cloud cost optimization and management.", icon: Cloud },
        { title: "Cybersecurity", description: "Firewalls, SSL, penetration testing, vulnerability assessments, and employee security training.", icon: Lock },
        { title: "ERP & CRM Integration", description: "Implementation and customization of Tally, Zoho, Salesforce, and custom ERP solutions.", icon: Database },
        { title: "Network & Infrastructure", description: "Office network setup, server management, VPN, and IT infrastructure planning for growing teams.", icon: Wifi },
        { title: "24/7 IT Support", description: "Dedicated helpdesk with fast response SLA, remote support, and on-site visits when needed.", icon: Headphones },
      ]}
      benefitsList={[
        "End-to-end IT ownership — we handle everything from setup to maintenance.",
        "99.9% uptime SLA on all managed infrastructure.",
        "Security-first approach — all systems hardened against modern threats.",
        "Agile development methodology with regular demos and updates.",
        "Transparent pricing with no surprise bills.",
        "Scalable solutions that grow with your business.",
        "Experienced team across web, mobile, cloud, and security.",
      ]}
      processSteps={[
        { step: "01", title: "Discovery Call", description: "We audit your current IT setup and understand your goals and pain points." },
        { step: "02", title: "Proposal & Roadmap", description: "We present a detailed scope, timeline, and cost estimate." },
        { step: "03", title: "Build & Configure", description: "Our engineers build, configure, and rigorously test everything." },
        { step: "04", title: "Handover & Support", description: "We go live, train your team, and provide ongoing support." },
      ]}
    />
  );
}
