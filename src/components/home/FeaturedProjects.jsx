import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Layers, ArrowRight, Brain, Search, CreditCard, Play } from 'lucide-react';
import { projectsData } from '../../data/projects';

export default function FeaturedProjects() {
  const iconMap = {
    brain: Brain,
    search: Search,
    wallet: CreditCard,
    play: Play,
  };

  return (
    <section className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Layers size={18} strokeWidth={2.2} className="text-[#136C49] dark:text-[#8EE2B2]" />
          <h2 className="text-base font-bold text-[#0F261E] dark:text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#4D675D] dark:text-[#8AA39B] hover:text-[#136C49] dark:hover:text-[#8EE2B2] transition-colors group"
        >
          <span>View All Projects</span>
          <ArrowRight size={13} strokeWidth={2.2} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => {
          const Icon = iconMap[project.theme?.type] || Brain;
          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`${project.theme?.bg || 'bg-white/80'} dark:bg-white/[0.05] rounded-2xl p-5 border border-white/80 dark:border-white/10 shadow-[0_8px_20px_-6px_rgba(14,44,36,0.06)] dark:shadow-none flex flex-col justify-between group transition-all duration-200 cursor-pointer`}
            >
              <div>
                {/* Top Row: Icon & Arrow */}
                <div className="flex items-center justify-between mb-3.5">
                  <div
                    className={`w-9 h-9 rounded-xl ${project.theme?.iconBg || 'bg-white'} ${project.theme?.iconColor || 'text-[#136C49]'} flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <Icon size={18} strokeWidth={2.2} />
                  </div>

                  <div className="text-[#5D7A6F] dark:text-[#8AA39B] group-hover:text-[#136C49] dark:group-hover:text-[#8EE2B2] group-hover:translate-x-0.5 transition-all">
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-[#0F261E] dark:text-white mb-1.5 group-hover:text-[#136C49] dark:group-hover:text-[#8EE2B2] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#5D7A6F] dark:text-[#8AA39B] leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tech Badges at Bottom */}
              <div className="pt-3 border-t border-black/5 dark:border-white/10 flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-pill bg-white dark:bg-white/10 text-[11px] font-mono font-medium text-[#466056] dark:text-[#A0B8AF] border border-black/5 dark:border-white/10 shadow-2xs"
                  >
                    {tech}
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
