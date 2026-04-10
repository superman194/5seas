import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Building2, Calculator, Monitor, Megaphone, PenTool, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/hooks/use-theme";

const services = [
  { name: "Virtual Office", href: "/services/virtual-office", icon: Building2, color: "text-indigo-500" },
  { name: "CA Services", href: "/services/ca-services", icon: Calculator, color: "text-emerald-500" },
  { name: "IT Services", href: "/services/it-services", icon: Monitor, color: "text-blue-500" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone, color: "text-teal-500" },
  { name: "Designing & Branding", href: "/services/branding", icon: PenTool, color: "text-purple-500" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:bg-secondary transition-colors">
              5S
            </div>
            <span className="font-display font-bold text-2xl tracking-tight dark:text-gray-100">
              5Seas<span className="text-secondary">Solution</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-secondary font-semibold" : "text-foreground/80 hover:text-secondary"}`}>
              Home
            </Link>
            <Link href="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-secondary font-semibold" : "text-foreground/80 hover:text-secondary"}`}>
              About
            </Link>

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <div className="flex items-center gap-0.5">
                <Link
                  href="/services"
                  className={`text-sm font-medium transition-colors ${location.startsWith("/services") ? "text-secondary font-semibold" : "text-foreground/80 hover:text-secondary"}`}
                >
                  Services
                </Link>
                <button
                  aria-label="Open services menu"
                  className={`p-1 transition-colors ${location.startsWith("/services") ? "text-secondary" : "text-foreground/60 hover:text-secondary"}`}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-popover rounded-2xl shadow-xl border border-border p-2 z-50"
                  >
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted transition-colors group">
                        <s.icon className={`w-5 h-5 ${s.color} flex-shrink-0`} />
                        <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">{s.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isHome && (
              <a href="#why-us" onClick={(e) => scrollToSection(e, "#why-us")} className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors">
                Why Us
              </a>
            )}

            <Link href="/contact" className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-secondary font-semibold" : "text-foreground/80 hover:text-secondary"}`}>
              Contact
            </Link>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-border bg-muted/50 hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <Link href="/contact">
              <Button className="bg-primary hover:bg-secondary text-white rounded-full px-6 transition-colors">
                Get Consultation
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full flex items-center justify-center border border-border bg-muted/50 text-foreground/70"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button className="p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-popover border-b border-border shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1 flex flex-col">
              <Link href="/" className="text-lg font-medium text-foreground p-3 rounded-xl hover:bg-muted">Home</Link>
              <Link href="/about" className="text-lg font-medium text-foreground p-3 rounded-xl hover:bg-muted">About</Link>
              <div>
                <button
                  className="w-full flex items-center justify-between text-lg font-medium text-foreground p-3 rounded-xl hover:bg-muted"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden pl-4 space-y-1">
                      {services.map((s) => (
                        <Link key={s.href} href={s.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted">
                          <s.icon className={`w-4 h-4 ${s.color}`} />
                          <span className="text-base font-medium text-foreground/80">{s.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="/contact" className="text-lg font-medium text-foreground p-3 rounded-xl hover:bg-muted">Contact</Link>
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-secondary text-white rounded-xl mt-2">Get Consultation</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
