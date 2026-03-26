import { motion } from "motion/react";

const experiences = [
  {
    period: "2022 - Present",
    company: "PhilHealth",
    role: "Social Insurance Officer",
    points: [
      "Efficiently managed member inquiries and claim processing workflows.",
      "Implemented internal tracking systems to improve response times.",
      "Facilitated digital transformation initiatives for regional branch operations."
    ],
    align: "left"
  },
  {
    period: "2020 - 2022",
    company: "USTP",
    role: "System Developer / Instructor",
    points: [
      "Developed University-wide information systems for student data management.",
      "Mentored 100+ students in computer engineering core principles.",
      "Maintained institutional web assets and hardware infrastructure."
    ],
    align: "right"
  },
  {
    period: "2018 - 2020",
    company: "Xavier University",
    role: "Laboratory Coordinator",
    points: [
      "Optimized laboratory equipment procurement and maintenance schedules.",
      "Coordinated cross-departmental administrative tasks for the Engineering college."
    ],
    align: "left"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="font-label text-primary text-sm tracking-[0.3em] uppercase mb-4 block">EXPERIENCE</span>
          <h2 className="font-headline text-4xl font-extrabold text-on-surface">Professional History</h2>
        </div>
        
        <div className="space-y-16 relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-outline-variant/20"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start ${exp.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`${exp.align === 'left' ? 'md:text-right' : 'md:order-2'}`}>
                <p className="font-label text-primary-container font-bold mb-1">{exp.period}</p>
                <h3 className="font-headline text-2xl font-bold text-on-surface">{exp.company}</h3>
                <p className="text-outline italic text-sm mb-4">{exp.role}</p>
              </div>
              
              <div className={`${exp.align === 'left' ? '' : 'md:order-1'} bg-surface-container-low p-8 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all`}>
                <ul className={`space-y-3 text-on-surface-variant text-sm leading-relaxed ${exp.align === 'right' ? 'text-right md:text-left' : ''}`}>
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
