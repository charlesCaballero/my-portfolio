import { motion } from "motion/react";
import { Monitor, Layout, Wrench, Server } from "lucide-react";

const skillCards = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "HTML, JavaScript, ReactJS, Next.js, Laravel, Python"
  },
  {
    icon: Layout,
    title: "Styling",
    description: "CSS, Tailwind CSS, Responsive Design"
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "Figma, Google Stitch, Git, GitHub, VS Code, Canva, CMS platforms"
  },
  {
    icon: Server,
    title: "Back-End",
    description: "PHP (basic), MySQL, Postgres, API integration"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label text-primary text-sm tracking-widest uppercase mb-4 block">CORE SKILLS</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-on-surface leading-snug">
              Web Developer and College Instructor with experience in developing responsive web applications and supporting business operations.
            </h2>
            <p className="text-on-surface-variant leading-loose mb-8">
              Strong background in system development, administrative support, and education. I leverage my engineering background to solve complex business problems with scalable code and efficient workflows.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {skillCards.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-surface-container p-6 rounded-xl border border-outline-variant/5 hover:border-primary/20 transition-all group"
              >
                <skill.icon className="text-primary mb-4 w-8 h-8 group-hover:scale-110 transition-transform" />
                <h4 className="font-headline font-bold text-on-surface mb-2">{skill.title}</h4>
                <p className="text-on-surface-variant text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
