import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SectionHeader from '../common/SectionHeader';
import { ArrowUpRight, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function ExperiencePreview() {
  const experiences = [
    {
      title: 'AI/ML Systems Development',
      role: 'Project Architect & Developer',
      period: '2024 - Present',
      description: 'Designing and implementing real-world AI applications including Neuron (Second Brain), StepWise (Process Guidance), and VaaniERP (Voice ERP).',
      tags: ['Python', 'FastAPI', 'LLMs', 'React', 'Speech AI'],
      icon: Code,
    },
    {
      title: 'B.Tech CSE with AI Specialization',
      role: 'Undergraduate Student',
      period: 'PSIT Kanpur',
      description: 'Studying core computer science fundamentals, data structures, algorithms, machine learning mathematics, and neural architectures.',
      tags: ['Data Structures', 'Machine Learning', 'AI Specialization', 'Algorithms'],
      icon: GraduationCap,
    },
  ];

  return (
    <section className="mb-10">
      <SectionHeader
        badge="TRAJECTORY"
        title="Experience &amp; Learning Journey"
        subtitle="Chronological milestones across academic foundations and practical application development."
        action={
          <Link
            to="/experience"
            className="text-xs font-mono font-semibold text-mint-600 hover:text-emerald-700 inline-flex items-center gap-1"
          >
            <span>Full Experience</span>
            <ArrowUpRight size={14} />
          </Link>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp) => {
          const Icon = exp.icon;
          return (
            <motion.div
              key={exp.title}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="glass-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-pill bg-mint-100 text-mint-600">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-text-primary-dark">{exp.title}</h3>
                      <p className="text-xs font-semibold text-mint-600">{exp.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-text-muted-dark">{exp.period}</span>
                </div>
                <p className="text-sm text-text-secondary-dark leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex flex-wrap gap-1.5">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-text-secondary-dark px-2 py-0.5 rounded-md bg-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
