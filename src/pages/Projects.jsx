import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from '../components/common/SectionHeader';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import { Sparkles } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8 pb-10">
      {/* ============================================================= */}
      {/* 1. SECTION HEADER WITH INTERACTIVE CATEGORY TABS              */}
      {/* ============================================================= */}
      <SectionHeader
        badge="ENGINEERING PORTFOLIO"
        title="Featured Systems &amp; Projects"
        subtitle="Intelligent AI applications, language model architectures, and production-grade software solutions."
        action={
          <div className="flex flex-wrap items-center gap-1.5 pt-2 md:pt-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pill-badge ${isActive ? 'active' : ''} cursor-pointer transition-all duration-200`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        }
      />

      {/* Filter Metainfo Row */}
      <div className="flex items-center justify-between text-xs text-text-muted-dark font-mono px-1">
        <div className="flex items-center gap-1.5">
          <Sparkles size={13} className="text-mint-600 dark:text-mint-400" />
          <span>
            Displaying <strong className="text-text-primary-dark font-semibold">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'system' : 'systems'} in <span className="text-mint-600 dark:text-mint-400 font-semibold">{activeCategory}</span>
          </span>
        </div>
        <span className="hidden sm:inline-block">Click 'View Details' on any card for full architecture</span>
      </div>

      {/* ============================================================= */}
      {/* 2. VISUALLY DOMINANT 16:9 PROJECTS GRID                       */}
      {/* 2-column layout ensures 16:9 images remain prominent & sharp  */}
      {/* ============================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* ============================================================= */}
      {/* 3. IN-DEPTH ARCHITECTURE MODAL                                */}
      {/* ============================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
