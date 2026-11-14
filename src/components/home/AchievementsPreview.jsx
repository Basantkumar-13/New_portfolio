import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SectionHeader from '../common/SectionHeader';
import { ArrowUpRight, Award, CheckCircle2, Trophy, Sparkles } from 'lucide-react';

export default function AchievementsPreview() {
  const milestones = [
    {
      title: 'B.Tech CSE with AI Specialization',
      org: 'PSIT Kanpur',
      category: 'Academic Milestone',
      description: 'Accepted into the competitive AI Specialization track, covering advanced machine learning, neural networks, and applied AI.',
      badge: 'Academic',
    },
    {
      title: 'Multimodal & Voice System Architecture',
      org: 'Independent Projects',
      category: 'Engineering Milestone',
      description: 'Designed and prototyped VaaniERP, exploring end-to-end voice-first interaction pipelines for multilingual enterprise workflows.',
      badge: 'Project',
    },
    {
      title: 'Second Brain & Knowledge Synthesis',
      org: 'Neuron Platform',
      category: 'Innovation Milestone',
      description: 'Engineered an AI-native memory platform combining vector embeddings and LLM retrieval for personal knowledge acceleration.',
      badge: 'System',
    },
  ];

  return (
    <section className="mb-10">
      <SectionHeader
        badge="MILESTONES"
        title="Achievements &amp; Highlights"
        subtitle="Key academic and engineering milestones achieved throughout my development trajectory."
        action={
          <Link
            to="/achievements"
            className="text-xs font-mono font-semibold text-mint-600 hover:text-emerald-700 inline-flex items-center gap-1"
          >
            <span>All Milestones</span>
            <ArrowUpRight size={14} />
          </Link>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="glass-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-pill bg-mint-100 text-mint-600 text-xs font-mono font-medium">
                  {item.badge}
                </span>
                <span className="text-xs font-mono text-text-muted-dark">{item.org}</span>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-pill bg-white shadow-sm text-mint-600 shrink-0">
                  <Trophy size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary-dark">{item.title}</h3>
                  <p className="text-xs text-text-muted-dark font-medium">{item.category}</p>
                </div>
              </div>

              <p className="text-sm text-text-secondary-dark leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 flex items-center gap-1.5 text-xs font-semibold text-mint-600">
              <CheckCircle2 size={14} />
              <span>Verified Milestone</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
