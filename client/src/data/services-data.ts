import { Monitor, Megaphone, Building2, Calculator, PenTool, type LucideIcon } from "lucide-react";

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
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
    description: "Premium business addresses, mail handling, and professional receptionist services for a fraction of the cost.",
    icon: Building2,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    accentHex: "#6366f1",
    overlayColor: "rgba(79,70,229,0.35)",
    href: "/services/virtual-office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Modern virtual office space",
  },
  {
    num: "02",
    title: "CA Services",
    description: "Expert tax planning, audits, registration, and financial compliance handled by seasoned professionals.",
    icon: Calculator,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    accentHex: "#059669",
    overlayColor: "rgba(5,150,105,0.35)",
    href: "/services/ca-services",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Financial accounting and CA services",
  },
  {
    num: "03",
    title: "IT Services",
    description: "Robust infrastructure, software development, and technical support to power your business operations.",
    icon: Monitor,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    accentHex: "#3b82f6",
    overlayColor: "rgba(59,130,246,0.35)",
    href: "/services/it-services",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=70&auto=format&fit=crop",
    imageAlt: "IT infrastructure and technology services",
  },
  {
    num: "04",
    title: "Digital Marketing",
    description: "Data-driven SEO, social media, and paid campaigns to accelerate your growth and visibility.",
    icon: Megaphone,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    accentHex: "#0d9488",
    overlayColor: "rgba(13,148,136,0.35)",
    href: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Digital marketing and social media campaigns",
  },
  {
    num: "05",
    title: "Designing & Branding",
    description: "Striking UI/UX, brand identity, and graphic design that leaves a lasting impression.",
    icon: PenTool,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    accentHex: "#8b5cf6",
    overlayColor: "rgba(139,92,246,0.35)",
    href: "/services/branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=70&auto=format&fit=crop",
    imageAlt: "Creative design and branding workspace",
  },
];
