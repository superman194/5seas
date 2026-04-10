import { Monitor, Megaphone, Building2, Calculator, PenTool, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  accentHex: string;
  overlayColor: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const servicesData: ServiceItem[] = [
  {
    num: "01",
    title: "Virtual Office",
    description: "Premium business addresses, mail handling, and professional receptionist services for a fraction of the cost of a physical office.",
    features: ["Prestigious registered business address", "Mail forwarding & handling", "Dedicated phone & receptionist"],
    icon: Building2,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50 dark:bg-indigo-950",
    accentHex: "#6366f1",
    overlayColor: "rgba(79,70,229,0.40)",
    href: "/services/virtual-office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&auto=format&fit=crop",
    imageAlt: "Modern virtual office space",
  },
  {
    num: "02",
    title: "CA Services",
    description: "Expert tax planning, audits, business registration, and full financial compliance handled by seasoned chartered accountants.",
    features: ["GST registration & filing", "Income tax planning & audit", "Company incorporation & ROC compliance"],
    icon: Calculator,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 dark:bg-emerald-950",
    accentHex: "#059669",
    overlayColor: "rgba(5,150,105,0.40)",
    href: "/services/ca-services",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=75&auto=format&fit=crop",
    imageAlt: "Financial accounting and CA services",
  },
  {
    num: "03",
    title: "IT Services",
    description: "Robust infrastructure, custom software development, and 24/7 technical support to power your business operations at scale.",
    features: ["Custom web & app development", "Cloud infrastructure & DevOps", "Cybersecurity & IT support"],
    icon: Monitor,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50 dark:bg-blue-950",
    accentHex: "#3b82f6",
    overlayColor: "rgba(59,130,246,0.40)",
    href: "/services/it-services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=75&auto=format&fit=crop",
    imageAlt: "IT infrastructure and technology services",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description: "Data-driven SEO, social media management, and paid ad campaigns that accelerate your growth and expand your reach.",
    features: ["SEO & content marketing", "Social media management", "Performance ads (Google & Meta)"],
    icon: Megaphone,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50 dark:bg-teal-950",
    accentHex: "#0d9488",
    overlayColor: "rgba(13,148,136,0.40)",
    href: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=75&auto=format&fit=crop",
    imageAlt: "Digital marketing and social media campaigns",
  },
  {
    num: "05",
    title: "Designing & Branding",
    description: "Striking UI/UX, brand identity systems, and graphic design that make a lasting impression and set you apart from the crowd.",
    features: ["Logo & brand identity design", "UI/UX for web & mobile", "Marketing collateral & print"],
    icon: PenTool,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50 dark:bg-purple-950",
    accentHex: "#8b5cf6",
    overlayColor: "rgba(139,92,246,0.40)",
    href: "/services/branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=75&auto=format&fit=crop",
    imageAlt: "Creative design and branding workspace",
  },
];
