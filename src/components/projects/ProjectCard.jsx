import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Info, Brain, Search, CreditCard, Play, Mic, Sparkles } from 'lucide-react';
import { TechLogo } from '../common/TechLogos';
import { GithubIcon } from '../common/Icons';

const previewIcons = {
  brain: Brain,
  search: Search,
  wallet: CreditCard,
  play: Play,
  mic: Mic,
  sparkles: Sparkles,
};

export default function ProjectCard({ project, onSelect, index = 0 }) {
  const Icon = previewIcons[project.previewTheme?.type] || Brain;
  const techList = project.techStack.map((name, i) => ({
    name,
    icon: project.techIcons?.[i] || name.toLowerCase().replace(/[^a-z0-9]/g, ''),
  }));

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group glass-card rounded-[24px] overflow-hidden flex flex-col justify-between border border-black/5 dark:border-white/10 hover:border-mint-400/50 dark:hover:border-mint-400/40 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.22)] transition-all duration-300 bg-surface-glass-solid dark:bg-[#071F19]/90"
    >
      <div>
        {/* ============================================================= */}
        {/* 1. VISUALLY DOMINANT 16:9 PREVIEW IMAGE AREA                  */}
        {/* ============================================================= */}
        <div className="relative aspect-video w-full overflow-hidden bg-black/95 select-none">
          {/* Subtle Dynamic Gradient Layer */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.previewTheme?.gradient || 'from-[#071F19] to-[#041712]'} transition-transform duration-700 ease-out group-hover:scale-110`}
          />

          {/* Architectural Tech Blueprint Grid */}
          <div
            className="absolute inset-0 opacity-20 dark:opacity-30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-40"
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Glowing Ambient Halo */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl opacity-60 transition-all duration-500 group-hover:scale-125 group-hover:opacity-85 pointer-events-none"
            style={{ backgroundColor: project.previewTheme?.accent || '#8EE2B2' }}
          />

          {/* Glass Centerpiece Monogram / Icon */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/25 shadow-[0_12px_28px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.3)] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
            >
              <Icon
                size={32}
                strokeWidth={2}
                style={{ color: project.previewTheme?.accent || '#8EE2B2' }}
                className="drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              />
            </div>

            {/* Sub-label under icon */}
            <span className="mt-2.5 text-[11px] font-mono tracking-wider text-white/75 font-semibold uppercase px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
              {project.previewTheme?.tag || project.category}
            </span>
          </div>

          {/* Top Status Indicators */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/15">
              {project.category}
            </span>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono font-medium text-white/90 border border-white/15">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: project.previewTheme?.accent || '#8EE2B2' }}
              />
              <span>{project.status || 'Active'}</span>
            </span>
          </div>

          {/* Subtle Hover Action Overlay */}
          <div className="absolute inset-0 bg-[#071F19]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 dark:bg-[#071F19]/95 text-[#071F19] dark:text-[#8EE2B2] text-xs font-bold tracking-tight shadow-lg border border-white/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Info size={14} />
              <span>Explore Architecture</span>
            </button>
          </div>
        </div>

        {/* ============================================================= */}
        {/* 2. CARD CONTENT AREA                                          */}
        {/* ============================================================= */}
        <div className="p-5 sm:p-6 space-y-4">
          {/* Title & Tagline */}
          <div>
            <h3 className="text-xl font-extrabold text-text-primary-dark group-hover:text-emerald-700 dark:group-hover:text-mint-400 transition-colors tracking-tight">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-xs font-semibold text-mint-600 dark:text-mint-400 mt-0.5">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-text-secondary-dark leading-relaxed font-normal line-clamp-2">
            {project.description}
          </p>

          {/* Technology Logos & Names Row */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono text-text-muted-dark uppercase tracking-wider block">
              Engineered With
            </span>
            <div className="flex flex-wrap gap-1.5">
              {techList.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-black/[0.03] dark:bg-white/[0.06] border border-black/5 dark:border-white/10 text-text-secondary-dark text-xs font-mono font-medium shadow-2xs hover:border-mint-500/30 transition-colors"
                >
                  <TechLogo name={tech.icon} size={14} className="shrink-0" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 3. CARD ACTION FOOTER                                         */}
      {/* ============================================================= */}
      <div className="p-5 sm:p-6 pt-0 mt-2 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-2.5">
        <div className="flex items-center gap-2">
          {/* GitHub Button */}
          <a
            href={project.links?.github || 'https://github.com/basantyadav'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} Source Code`}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-text-primary-dark border border-black/10 dark:border-white/10 text-xs font-semibold transition-all active:scale-95 shadow-2xs cursor-pointer"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          {/* Live Demo Button */}
          <a
            href={project.links?.live || '#'}
            target={project.links?.live ? '_blank' : '_self'}
            rel="noopener noreferrer"
            aria-label={`${project.title} Live Demo`}
            onClick={(e) => {
              if (!project.links?.live) {
                e.preventDefault();
                onSelect(project);
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-mint-500/15 hover:bg-mint-500/25 dark:bg-mint-400/15 dark:hover:bg-mint-400/25 text-mint-700 dark:text-mint-300 border border-mint-500/30 text-xs font-semibold transition-all active:scale-95 shadow-2xs cursor-pointer"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={13} strokeWidth={2.2} />
          </a>
        </div>

        {/* View Details Modal Trigger */}
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#102D26] hover:bg-[#163D34] dark:bg-[#8EE2B2] dark:hover:bg-[#A3EFC5] text-white dark:text-[#071F19] text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer ml-auto"
        >
          <span>View Details</span>
          <ArrowUpRight size={13} strokeWidth={2.2} />
        </button>
      </div>
    </motion.article>
  );
}
