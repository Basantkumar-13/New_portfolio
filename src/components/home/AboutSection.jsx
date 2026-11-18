import SectionHeader from '../common/SectionHeader';
import SocialLinks from '../common/SocialLinks';
import { MapPin, Brain, Code, Cpu } from 'lucide-react';
import { profileData } from '../../data/profile';

const pillarIcons = {
  brain: Brain,
  code: Code,
  cpu: Cpu,
};

export default function AboutSection() {
  return (
    <section id="about" className="space-y-6 pt-2">
      {/* Section Header */}
      <SectionHeader
        badge="ENGINEER IDENTITY"
        title="About Me"
        subtitle="AI/ML Engineer and software developer passionate about building practical, intelligent systems."
      />

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Full Bio & Approach */}
        <div className="lg:col-span-2 glass-card p-6 md:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-primary-dark tracking-tight">
              {profileData.name} — {profileData.title}
            </h3>
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-sm md:text-base text-text-secondary-dark leading-relaxed font-normal">
                {paragraph}
              </p>
            ))}

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {profileData.pillars.map((pillar) => {
                const Icon = pillarIcons[pillar.icon] || Brain;
                return (
                  <div
                    key={pillar.id}
                    className="p-3.5 rounded-2xl bg-white/50 dark:bg-white/[0.04] border border-black/5 dark:border-white/5 space-y-1"
                  >
                    <div className="w-7 h-7 rounded-lg bg-mint-500/10 text-mint-600 dark:text-mint-400 flex items-center justify-center mb-1">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-xs font-bold text-text-primary-dark">{pillar.title}</h4>
                    <p className="text-[11px] text-text-muted-dark leading-tight">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Location & Social Row */}
          <div className="pt-4 mt-2 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted-dark">
              <MapPin size={14} className="text-mint-600 dark:text-mint-400 shrink-0" />
              <span>{profileData.locationShort}</span>
            </div>
            <SocialLinks />
          </div>
        </div>

        {/* Right Column: Profile Overview Card */}
        <div className="glass-card p-6 space-y-4 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-bold text-text-primary-dark pb-2 border-b border-black/5 dark:border-white/10">
              Profile Overview
            </h4>
            <ul className="space-y-3 text-xs text-text-secondary-dark pt-1">
              <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
                <span className="text-text-muted-dark">Full Name</span>
                <span className="font-semibold text-text-primary-dark">{profileData.name}</span>
              </li>
              <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
                <span className="text-text-muted-dark">Degree</span>
                <span className="font-semibold text-text-primary-dark">{profileData.degree}</span>
              </li>
              <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
                <span className="text-text-muted-dark">Institution</span>
                <span className="font-semibold text-text-primary-dark">{profileData.institution}</span>
              </li>
              <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
                <span className="text-text-muted-dark">Primary Focus</span>
                <span className="font-semibold text-text-primary-dark">{profileData.primaryFocus}</span>
              </li>
              <li className="flex justify-between py-1 border-b border-black/5 dark:border-white/10">
                <span className="text-text-muted-dark">Key Systems</span>
                <span className="font-semibold text-mint-600 dark:text-mint-400 text-right">
                  {profileData.keySystems}
                </span>
              </li>
              <li className="flex justify-between py-1">
                <span className="text-text-muted-dark">Availability</span>
                <span className="text-mint-600 dark:text-mint-400 font-semibold">
                  {profileData.availability}
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-text-muted-dark">
            <span>Specialization: {profileData.specialization}</span>
            <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
