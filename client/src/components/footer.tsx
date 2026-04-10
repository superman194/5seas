import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white font-bold text-xl">5S</div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                5Seas<span className="text-secondary">Solution</span>
              </span>
            </div>
            <p className="text-white/65 mb-6 leading-relaxed text-sm">
              Your trusted partner for comprehensive business solutions. We help startups and SMEs scale, comply, and dominate their industry.
            </p>
            <div className="space-y-2.5 mb-6">
              <a href="tel:+919958173726" className="flex items-center gap-2.5 text-white/65 hover:text-secondary transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" /> +91 99581 73726
              </a>
              <a href="mailto:5seassolution@gmail.com" className="flex items-center gap-2.5 text-white/65 hover:text-secondary transition-colors text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" /> 5seassolution@gmail.com
              </a>
              <span className="flex items-center gap-2.5 text-white/65 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" /> Delhi NCR, India
              </span>
            </div>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-white/65 hover:text-secondary transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-white/65 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-white/65 hover:text-secondary transition-colors text-sm">Contact Us</Link></li>
              <li><a href="/#why-us" className="text-white/65 hover:text-secondary transition-colors text-sm">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-base mb-5">Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/services/virtual-office" className="text-white/65 hover:text-secondary transition-colors text-sm">Virtual Office</Link></li>
              <li><Link href="/services/ca-services" className="text-white/65 hover:text-secondary transition-colors text-sm">CA & Compliance</Link></li>
              <li><Link href="/services/it-services" className="text-white/65 hover:text-secondary transition-colors text-sm">IT Solutions</Link></li>
              <li><Link href="/services/digital-marketing" className="text-white/65 hover:text-secondary transition-colors text-sm">Digital Marketing</Link></li>
              <li><Link href="/services/branding" className="text-white/65 hover:text-secondary transition-colors text-sm">Designing & Branding</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-base mb-5">Stay Updated</h4>
            <p className="text-white/65 mb-4 text-sm leading-relaxed">Get business insights and updates delivered to your inbox.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/10 border border-white/20 text-white rounded-l-lg px-3 py-2 w-full text-sm focus:outline-none focus:border-secondary placeholder:text-white/35"
              />
              <button className="bg-secondary px-3 py-2 rounded-r-lg text-sm font-semibold hover:bg-secondary/90 transition-colors whitespace-nowrap">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-xs">
            &copy; {new Date().getFullYear()} 5SeasSolution. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/45">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/30 transition-colors"
          >
            <ArrowUp className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>
    </footer>
  );
}
