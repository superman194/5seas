import { ServicePageLayout } from "@/components/service-page-layout";
import {
  PenTool, Palette, Layout, Image, Video, Type, Star, Layers,
} from "lucide-react";

export default function Branding() {
  return (
    <ServicePageLayout
      seoTitle="Designing & Branding Services | 5SeasSolution"
      seoDescription="Premium UI/UX design, logo creation, brand identity, and creative assets that make your business unforgettable."
      badge="Designing & Branding"
      title="Design That Makes Your"
      subtitle="Brand Unforgettable"
      heroDescription="Your brand is your first impression — and we make it count. From logo design and brand identity systems to stunning UI/UX and print materials, we craft visual stories that resonate with your audience and set you apart from the competition."
      icon={PenTool}
      iconColor="text-purple-500"
      iconBg="bg-purple-500/10"
      accentColor="text-purple-500"
      highlights={[
        { value: "150+", label: "Brands Designed" },
        { value: "4.9★", label: "Client Satisfaction" },
        { value: "7 days", label: "Logo Delivery" },
        { value: "∞", label: "Revisions Until Perfect" },
      ]}
      features={[
        {
          title: "Logo & Brand Identity",
          description: "Custom logo design, color palettes, typography, and complete brand guidelines for consistent communication.",
          icon: Star,
        },
        {
          title: "UI/UX Design",
          description: "User-centered website and mobile app design with wireframes, prototypes, and pixel-perfect final assets.",
          icon: Layout,
        },
        {
          title: "Social Media Graphics",
          description: "On-brand post templates, story designs, cover photos, and content calendars for all platforms.",
          icon: Image,
        },
        {
          title: "Print & Marketing Collateral",
          description: "Business cards, brochures, banners, letterheads, and presentation decks that leave lasting impressions.",
          icon: Layers,
        },
        {
          title: "Motion Graphics & Video",
          description: "Animated logos, explainer videos, reels, and ads that capture attention and drive engagement.",
          icon: Video,
        },
        {
          title: "Brand Messaging & Copywriting",
          description: "Compelling taglines, brand voice guidelines, and website copy that converts visitors into customers.",
          icon: Type,
        },
      ]}
      benefitsList={[
        "Senior designers with 8+ years of experience across industries.",
        "Strategy-first approach — design decisions backed by market research.",
        "Unlimited revisions until you're 100% satisfied.",
        "Delivered in all formats: web, print, social, video.",
        "Fast turnaround — logo in 7 days, full identity in 3 weeks.",
        "Consistent brand voice across every touchpoint.",
        "Affordable packages for startups to enterprise brands.",
      ]}
      processSteps={[
        { step: "01", title: "Brand Discovery", description: "We deep-dive into your business, audience, competitors, and vision." },
        { step: "02", title: "Concept Design", description: "We present 3 unique design directions for your feedback." },
        { step: "03", title: "Refine & Perfect", description: "We refine your chosen direction through collaborative feedback rounds." },
        { step: "04", title: "Delivery", description: "Final files delivered in all formats with a complete brand guidelines document." },
      ]}
    />
  );
}
