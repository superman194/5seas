import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { Portfolio } from "@/components/portfolio";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features";
import { CtaSection } from "@/components/cta-section";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Features />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
