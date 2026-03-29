import { motion } from "motion/react";
import { Package, Layout, ExternalLink, Compass } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase mb-4 block">FEATURED WORK</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Featured Engineering Projects</h2>
          </div>
          <p className="text-on-surface-variant text-sm md:text-base max-w-sm">
            A selection of custom-built applications focused on operational efficiency and refined user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Project */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface-container p-8 rounded-2xl border border-outline-variant/10 group hover:bg-surface-bright transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <Package className="text-primary w-10 h-10" />
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-on-primary-container/20 text-primary-fixed-dim text-xs font-bold rounded-full uppercase tracking-tighter">Next.js</span>
                  <span className="px-3 py-1 bg-on-primary-container/20 text-primary-fixed-dim text-xs font-bold rounded-full uppercase tracking-tighter">PostgreSQL</span>
                </div>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">Warehouse Management System</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed max-w-lg">
                A robust, enterprise-grade logistics platform designed for real-time tracking, inventory optimization, and automated reporting for high-volume storage facilities.
              </p>
              <div className="mt-auto overflow-hidden rounded-xl border border-outline-variant/10">
                <img 
                  alt="WMS Dashboard preview" 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoNCTqzj8RJlPA87Rs-82FYETeNDlc2YQEd4gBDOpHM5R2o34PFFmjlrqmqqNjENWYBI8CPMU_vttHVidVhvhriBp1xZtansybc1YaTC6rOplNdq1FkSecJFkFcps9TZAvjc09ZCiiw8nQiYSpnxxKMQdWbGka7C87NHh-fP0iib_wachiAgPqeuirNEblV4JQLNdEmYoeSr20rzskmftEY0_weQRIlp2eQC-OAkepW3Ayybt59z3Exfgk0Oi7C6v5DW1fNA_Tf80"
                />
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-surface-container p-8 rounded-2xl border border-outline-variant/10 group hover:bg-surface-bright transition-all"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <Layout className="text-primary w-10 h-10" />
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-4">Office Supplies Manager</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                Internal tool for tracking procurement requests and stock distribution across multi-department organizations.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase">React</span>
                <span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase">Supabase</span>
              </div>
              <div className="mt-auto border-t border-outline-variant/10 pt-4 flex justify-between items-center">
                <span className="text-xs text-outline font-mono">v1.4.2</span>
                <ExternalLink className="text-on-surface-variant group-hover:translate-x-1 transition-transform w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 bg-surface-container p-8 md:p-12 rounded-3xl border border-outline-variant/10 group hover:bg-surface-bright transition-all overflow-hidden"
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-2">
                <Compass className="text-tertiary mb-6 w-12 h-12" />
                <h3 className="font-headline text-3xl font-bold text-on-surface mb-6">PoorKids Adventures</h3>
                <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
                  A comprehensive budget travel platform providing detailed guides, cost-saving tips, and destination insights for travelers looking to explore the world without breaking the bank.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-1.5 border border-outline-variant/30 text-outline text-sm rounded-full font-medium">ReactJS</span>
                  <span className="px-4 py-1.5 border border-outline-variant/30 text-outline text-sm rounded-full font-medium">TailwindCSS</span>
                  <span className="px-4 py-1.5 border border-outline-variant/30 text-outline text-sm rounded-full font-medium">Github</span>
                </div>
                <motion.a 
                  href="https://poorkids-adventures-875354943693.us-west1.run.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-2xl font-bold text-base transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  Visit Live Site <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
              <div className="md:col-span-3 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 transform group-hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    alt="PoorKids Adventures Mockup" 
                    className="w-full h-auto object-cover" 
                    referrerPolicy="no-referrer"
                    src="/poorkids-adventures-mockup.png"
                  />
                </div>
                {/* Decorative background element */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-tertiary/10 blur-3xl rounded-full -z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full -z-0"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
