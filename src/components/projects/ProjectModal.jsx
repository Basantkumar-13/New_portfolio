import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2, Layers, Brain, Search, CreditCard, Play, Mic, Sparkles } from 'lucide-react';
import { TechLogo } from '../common/TechLogos';
import { GithubIcon } from '../common/Icons';

const modalIcons = {
  brain: Brain,
  search: Search,
  wallet: CreditCard,
  play: Play,
  mic: Mic,
  sparkles: Sparkles,
};

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const Icon = modalIcons[project.previewTheme?.type] || Brain;
  const techList = project.techStack.map((name, i) => ({
    name,
    icon: project.techIcons?.[i] || name.toLowerCase().replace(/[^a-z0-9]/g, ''),
  }));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Frosted Glass Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', damping: 28, stiffness: 360, mass: 0.8 }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#071F19] rounded-[28px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border border-black/10 dark:border-white/15 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          {/* Close Button (Floating Top-Right) */}
          <button
            onClick={onClose}
            aria-label="Close Project Details"
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Modal Content Scroll Area */}
          <div className="overflow-y-auto custom-scrollbar">
            {/* 16:9 Architectural Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/95 select-none">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.previewTheme?.gradient || 'from-[#071F19] to-[#041712]'}`}
              />

              {/* Grid Background */}
              <div
                className="absolute inset-0 opacity-25 dark:opacity-35 mix-blend-overlay"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)',
                  backgroundSize: '18px 18px',
                }}
              />

              {/* Centerpiece Icon & Glow */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div
                  className="w-20 h-20 rounded-3xl bg-white/[0.08] backdrop-blur-xl border border-white/25 shadow-[0_16px_36px_rgba(0,0,0,0.5)] flex items-center justify-center"
                >
                  <Icon
                    size={40}
                    strokeWidth={2}
                    style={{ color: project.previewTheme?.accent || '#8EE2B2' }}
                    className="drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]"
                  />
                </div>

                <h3 className="mt-3 text-lg font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-white/70">
                  {project.previewTheme?.tag || project.category}
                </p>
              </div>

              {/* Badges in Banner */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white border border-white/20">
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: project.previewTheme?.accent || '#8EE2B2' }}
                  />
                  <span>{project.status || 'Active Development'}</span>
                </span>
              </div>
            </div>

            {/* Modal Body Info */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Header Title & Tagline */}
              <div>
                <h2 id="modal-project-title" className="text-2xl md:text-3xl font-extrabold text-text-primary-dark tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm font-semibold text-mint-600 dark:text-mint-400 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Extended Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-text-muted-dark uppercase tracking-wider">
                  System Architecture &amp; Purpose
                </h4>
                <p className="text-sm md:text-base text-text-secondary-dark leading-relaxed font-normal">
                  {project.extendedOverview || project.description}
                </p>
              </div>

              {/* Key Features / Architectural Highlights */}
              {project.keyFeatures && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono text-text-muted-dark uppercase tracking-wider">
                    Core Technical Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-mint-600 dark:text-mint-400 shrink-0 mt-0.5"
                        />
                        <span className="text-xs text-text-secondary-dark font-medium leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack Grid */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono text-text-muted-dark uppercase tracking-wider">
                  Complete Technology Ecosystem
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {techList.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.06] border border-black/5 dark:border-white/10 flex items-center gap-2"
                    >
                      <TechLogo name={tech.icon} size={18} className="shrink-0" />
                      <span className="text-xs font-mono font-medium text-text-primary-dark">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <a
                href={project.links?.github || 'https://github.com/basantyadav'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/20 text-text-primary-dark border border-black/10 dark:border-white/15 text-xs font-bold transition-all active:scale-95 shadow-2xs"
              >
                <GithubIcon size={16} />
                <span>GitHub Repository</span>
              </a>

              <a
                href={project.links?.live || project.links?.github || 'https://github.com/basantyadav'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-mint-500/20 hover:bg-mint-500/30 text-mint-700 dark:text-mint-300 border border-mint-500/30 text-xs font-bold transition-all active:scale-95"
              >
                <span>Live Demo</span>
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 text-text-secondary-dark text-xs font-semibold transition-colors cursor-pointer ml-auto"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
