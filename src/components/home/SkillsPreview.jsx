import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SectionHeader from '../common/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { skillsData } from '../../data/skills';

export default function SkillsPreview() {
  return (
    <section className="glass-card p-6 md:p-8 mb-10">
      <SectionHeader
        badge="CAPABILITIES"
        title="Technical Stack &amp; Skills"
        subtitle="Core competencies across machine learning, backend architectures, and modern user interfaces."
        action={
          <Link
            to="/skills"
            className="text-xs font-mono font-semibold text-mint-600 hover:text-emerald-700 inline-flex items-center gap-1"
          >
            <span>Detailed Breakdown</span>
            <ArrowUpRight size={14} />
          </Link>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((group) => (
          <div key={group.category} className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted-dark pb-2 border-b border-black/5">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 rounded-pill bg-white/75 hover:bg-white border border-white text-xs font-medium text-text-primary-dark shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-mint-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
