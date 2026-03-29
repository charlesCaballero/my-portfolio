import { motion } from "motion/react";

const experiences = [
  {
    period: "August 2018 – Present",
    company: "PhilHealth Regional Office X – Cagayan de Oro City",
    role: "Social Insurance Assistant I / Full-Stack Developer",
    points: [
      "Manage and organise warehouse records, including storage, withdrawal, return, and disposal of documents.",
      "Developed a warehouse management system to improve operational efficiency and tracking processes.",
      "Built responsive web interfaces using React, Next.js, and Tailwind CSS.",
      "Maintained and enhanced internal systems for improved usability and performance.",
      "Utilised Git for version control and structured development workflows.",
      "Leveraged AI tools to streamline development, assist in debugging, and improve code quality."
    ],
    align: "left"
  },
  {
    period: "June 2023 – Present",
    company: "University of Science and Technology of Southern Philippines – Cagayan de Oro City",
    role: "Part-time Instructor",
    points: [
      "Delivered lectures and facilitated learning in Computer Fundamentals and Programming with a focus on Python programming.",
      "Developed instructional materials to support student understanding.",
      "Guided students in applying technical concepts to practical projects."
    ],
    align: "right"
  },
  {
    period: "July 2017 – August 2018",
    company: "Xavier University – Cagayan de Oro City",
    role: "Project Assistant",
    points: [
      "Contributed to the development of a mobile application for farmers to identify optimal fertilizers for vegetable crops.",
      "Assisted in system design, testing, and implementation.",
      "Supported project coordination and documentation to ensure timely delivery."
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
