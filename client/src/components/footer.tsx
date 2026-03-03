import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t-4 border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white font-bold text-xl">
                5S
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                5Seas<span className="text-secondary">Solution</span>
              </span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner for comprehensive business solutions. We help you scale, comply, and dominate your industry.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-secondary transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">IT Solutions</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">Virtual Office</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">CA & Compliance</a></li>
              <li><a href="#services" className="text-white/70 hover:text-secondary transition-colors">Designing & Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to get latest updates and business insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border border-white/20 text-white rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-secondary"
              />
              <button className="bg-secondary px-4 py-2 rounded-r-lg font-semibold hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} 5SeasSolution. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-white/70" />
          </button>
        </div>
      </div>
    </footer>
  );
}
