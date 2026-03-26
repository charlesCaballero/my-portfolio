import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 z-10"
        >
          <p className="font-label text-primary tracking-[0.2em] uppercase text-xs mb-4 font-semibold">
            FULL-STACK WEB DEVELOPER & VA
          </p>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
            Charles G. Caballero <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
              Full-Stack Developer
            </span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Crafting efficient, user-centric web applications and managing complex systems with a blend of creativity and engineering precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl transition-all hover:shadow-[0_20px_40px_rgba(0,218,248,0.15)] flex items-center gap-2"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-outline-variant/30 text-on-surface font-semibold rounded-xl hover:bg-surface-container transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-transparent absolute -top-10 -right-10 w-full h-full blur-3xl -z-10"></div>
          <div className="relative rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl">
            <img 
              alt="Charles G. Caballero workspace" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCycU26XsdoCq-A_ETaaAttcEtf6BeWFyEI5NYRJu4hmqAXP6h9SaXDg0pvfaBTg_QbwgnROHqJ6r2uKBEQg_UkEDRcJk5dviNUPFpCnW_rCgmOO3IW3tT30FXAahfZWezNxgPvDly-SysafWKfLXyg5L7FEWq5Z2mzBSRUupixhvAYYOHx84kfbt9Ylcz2pi8FzzPRboLMVyDqyYRIf3tIUM11GUGQnvMJzuzeFNRR_RTs_vReEOyM2nWZPB6KoxF5iE3EMUAKZxE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
