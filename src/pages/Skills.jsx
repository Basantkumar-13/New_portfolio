import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from '../components/common/SectionHeader';
import { skillsData } from '../data/skills';
import { TechLogo } from '../components/common/TechLogos';
import { Code2, Brain, Sparkles, Layout, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  'programming-languages': Code2,
  'ai-ml': Brain,
  'generative-ai': Sparkles,
  'frontend-development': Layout,
  'databases': Database,
  'developer-tools': Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterTabs = ['All', ...skillsData.map((c) => c.category)];

  const displayedGroups = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <div className="space-y-10 pb-8">
      {/* Page Header */}
      <SectionHeader
        badge="TECH STACK & ARCHITECTURE"
        title="Technology Showcase"
        subtitle="Curated ecosystem of languages, machine learning frameworks, generative AI tools, and infrastructure used to build production software."
        action={
          <div className="flex flex-wrap gap-1.5 pt-2 md:pt-0">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`pill-badge ${isActive ? 'active' : ''} cursor-pointer`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        }
      />

      {/* Categorized Technology Sections */}
      <div className="space-y-12">
        <AnimatePresence mode="wait">
          {displayedGroups.map((group, groupIdx) => {
            const CategoryIcon = categoryIcons[group.id] || Code2;

            return (
              <motion.section
                key={group.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: groupIdx * 0.05 }}
                className="space-y-4"
              >
                {/* Category Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-black/5 dark:border-white/10 gap-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-mint-500/10 dark:bg-mint-500/15 text-mint-600 dark:text-mint-400 flex items-center justify-center shrink-0 border border-mint-500/20">
                      <CategoryIcon size={17} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-primary-dark tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-text-muted-dark font-medium max-w-md sm:text-right">
                    {group.description}
                  </p>
                </div>

                {/* Cards Grid: Consistent 4-column responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      whileHover={{ y: -3 }}
                      transition={{ type: 'spring', stiffness: 420, damping: 25 }}
                      className="glass-card p-5 flex flex-col justify-between group transition-all duration-200 hover:border-mint-400/40 dark:hover:border-mint-400/35 hover:shadow-[0_12px_30px_-8px_rgba(16,185,129,0.12)] min-h-[148px]"
                    >
                      <div>
                        {/* Top Row: Logo + Category Tag */}
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/[0.08] p-2 flex items-center justify-center shadow-2xs border border-black/5 dark:border-white/10 group-hover:scale-105 transition-transform duration-200">
                            <TechLogo name={skill.icon} size={22} />
                          </div>

                          {skill.tag && (
                            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-text-muted-dark group-hover:text-mint-600 dark:group-hover:text-mint-400 group-hover:bg-mint-500/10 transition-colors">
                              {skill.tag}
                            </span>
                          )}
                        </div>

                        {/* Technology Name */}
                        <h4 className="text-base font-bold text-text-primary-dark group-hover:text-mint-600 dark:group-hover:text-mint-400 transition-colors mb-1.5">
                          {skill.name}
                        </h4>

                        {/* One-Line Architecture Description */}
                        <p className="text-xs text-text-secondary-dark leading-relaxed font-normal">
                          {skill.description}
                        </p>
                      </div>

                      {/* Subtle Bottom Accent Line on Hover */}
                      <div className="mt-4 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted-dark opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-mint-600 dark:text-mint-400 font-semibold">Production Ready</span>
                        <span className="text-[10px]">●</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
