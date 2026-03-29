import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-cyan-400 font-body text-sm antialiased w-full py-16 px-8 border-t border-slate-800/50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-semibold text-slate-200">
            Argus<span className="text-cyan-400">&lt;X&gt;</span>Codes
          </div>
          <p className="text-slate-500 max-w-sm">
            Bridging the gap between robust engineering and refined design. Let's build something exceptional together.
          </p>
          <div className="flex gap-6 mt-8">
            {["LinkedIn", "GitHub", "Twitter", "Email"].map((link) => (
              <a 
                key={link}
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-200 opacity-80 hover:opacity-100" 
                href={link === 'Email' ? 'mailto:charles.g.caballero@gmail.com' : '#'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:text-right flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-xs font-label text-outline uppercase tracking-[0.2em] mb-4">Quick Navigation</p>
            <div className="flex flex-col md:items-end gap-3">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={item === "About" ? "#" : `#${item.toLowerCase()}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="text-slate-500 text-xs mt-12">
            © {new Date().getFullYear()} Charles G. Caballero | ArgusXCodes. Built with Precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
