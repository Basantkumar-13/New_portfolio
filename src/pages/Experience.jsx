import SectionHeader from '../components/common/SectionHeader';
import { experiencesData } from '../data/experience';

export default function Experience() {
  return (
    <div className="space-y-8">
      <SectionHeader
        badge="CAREER TRAJECTORY"
        title="Work Experience"
        subtitle="Chronological record of roles, architectural contributions, and impact."
      />

      <div className="relative pl-6 border-l-2 border-mint-200/60 dark:border-mint-500/30 space-y-8">
        {experiencesData.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline bullet */}
            <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-mint-400 border-4 border-canvas shadow-sm" />
            
            <div className="glass-card p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base font-bold text-text-primary-dark">{exp.role}</h3>
                  <p className="text-xs text-mint-600 font-semibold">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-text-muted-dark">{exp.period}</span>
              </div>
              <p className="text-sm text-text-secondary-dark leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.technologies.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/10 text-text-secondary-dark dark:text-text-primary-dark border border-black/5 dark:border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
