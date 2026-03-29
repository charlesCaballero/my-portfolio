import { motion } from "motion/react";
import { GraduationCap, Cpu, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <section className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <span className="font-label text-primary text-sm tracking-[0.3em] uppercase mb-4 block">Foundations</span>
          <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-6">Education & Credentials</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Marrying formal engineering training with industry-standard professional certifications to deliver world-class digital products.
          </p>
        </motion.div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Degree */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-highest p-8 rounded-2xl border border-primary/10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h4 className="font-label text-primary text-xs font-bold uppercase mb-2">Bachelor of Science</h4>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Computer Engineering</h3>
              <p className="text-on-surface-variant text-sm mb-4">University of Science and Technology of Southern Philippines</p>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Strong foundation in software development, hardware systems, and systems integration.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <GraduationCap className="w-5 h-5" />
                June 2012 – March 2017
              </div>
            </div>
            <Cpu className="absolute -bottom-4 -right-4 w-32 h-32 text-primary/5 select-none pointer-events-none" />
          </motion.div>

          {/* Google Cert */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container p-8 rounded-2xl border border-tertiary/10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                <img 
                  alt="Google Certificate Badge" 
                  className="w-8 h-8 object-contain" 
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaH3x79NLBsBc9V0LZRUkVSTfWg532dbAvLrc87X1AthUSwZNwuVZeRRgzrekAqme6IR9Q4zqUOuIcW2wFPamN-Fq8ftnb9dRF9S1IaeG1P-fQBOn2QuGuCNGtTQC9j_3G100_Rd3VWMp7szQosMCoga-v4n84vfNiFH-JhksTD9QHF-X5ITyn6pGYND88ULSoBpvcQmMWv4q57b2j-waQCVxP0hU8_Ws9MyBz1tzQPhLW3afmUjDzSK8nLJGbDUM0sBztSnnd2iU"
                />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Google UX Design</h3>
              <p className="text-tertiary text-xs font-bold uppercase tracking-widest mb-4 italic">Professional Certificate</p>
              <p className="text-on-surface-variant text-sm mb-6">Mastering the end-to-end design process, from user research to high-fidelity prototyping.</p>
              <a 
                href="https://drive.google.com/file/d/1Ifl_YN_GwY55kV4dcd1c0lDAtn6_ej19/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface font-bold text-sm flex items-center gap-2 hover:text-primary transition-colors"
              >
                View Certificate <CheckCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
