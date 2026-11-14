import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import SectionHeader from '../common/SectionHeader';
import { Code2, GitBranch, Cpu, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function CodingStatsPreview() {
  const tracks = [
    {
      title: 'AI & Machine Learning Focus',
      description: 'Applied LLM architectures, vector retrieval pipelines, and voice-driven enterprise workflows.',
      tags: ['Python', 'Vector DB', 'NLP', 'Speech AI'],
      status: 'Active Track',
      icon: Cpu,
    },
    {
      title: 'Full-Stack Software Development',
      description: 'High-performance REST backends coupled with responsive, accessible React interfaces.',
      tags: ['FastAPI', 'React', 'Tailwind CSS', 'SQL'],
      status: 'Active Track',
      icon: Code2,
    },
    {
      title: 'Open Source & Repository Hygiene',
      description: 'Modular codebases with structured commits, environment isolation, and clean documentation.',
      tags: ['Git', 'GitHub', 'CI/CD Basics', 'Linux'],
      status: 'Continuous',
      icon: GitBranch,
    },
  ];

  return (
    <section className="mb-10">
      <SectionHeader
        badge="CODING PROFILE"
        title="Technical Domains &amp; Activity"
        subtitle="Transparent overview of active learning tracks, development focus, and engineering practices without inflated metrics."
        action={
          <Link
            to="/analytics"
            className="text-xs font-mono font-semibold text-mint-600 hover:text-emerald-700 inline-flex items-center gap-1"
          >
            <span>Full Analytics</span>
            <ArrowUpRight size={14} />
          </Link>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tracks.map((track) => {
          const Icon = track.icon;
          return (
            <motion.div
              key={track.title}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="glass-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-pill bg-mint-100 text-mint-600">
                    <Icon size={18} />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-pill bg-white/70 text-text-muted-dark border border-white">
                    {track.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-text-primary-dark mb-2">
                  {track.title}
                </h3>
                <p className="text-sm text-text-secondary-dark leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex flex-wrap gap-1.5">
                {track.tags.map((t) => (
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
