import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", 
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md shadow-xl shadow-cyan-500/5 font-headline tracking-tight">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-slate-50 uppercase">
          Argus<span className="text-primary">&lt;X&gt;</span>Codes
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a 
                key={link.name}
                href={link.href}
                className={`transition-colors relative pb-1 ${
                  isActive ? "text-cyan-400" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="ml-4 px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl transition-transform hover:shadow-[0_0_20px_rgba(0,218,248,0.3)]"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <Menu className="text-on-surface cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
