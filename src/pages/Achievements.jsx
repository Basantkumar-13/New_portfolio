import SectionHeader from '../components/common/SectionHeader';
import { achievementsData } from '../data/achievements';
import { Trophy, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  return (
    <div className="space-y-8">
      <SectionHeader
        badge="HONORS &amp; CREDENTIALS"
        title="Milestones &amp; Achievements"
        subtitle="Competitions, verified certifications, and community recognitions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((item) => (
          <div key={item.id} className="glass-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-pill bg-mint-100 dark:bg-white/10 text-mint-600 dark:text-mint-400 text-xs font-mono font-medium border border-mint-200/50 dark:border-white/10">
                  {item.tag}
                </span>
                <span className="text-xs font-mono text-text-muted-dark">{item.date}</span>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2.5 rounded-pill bg-white dark:bg-white/10 shadow-sm text-mint-600 dark:text-mint-400 shrink-0 border border-black/5 dark:border-white/10">
                  <Trophy size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary-dark">{item.title}</h3>
                  <p className="text-xs text-text-muted-dark font-medium">{item.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary-dark leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/10 mt-4 flex items-center gap-1.5 text-xs font-semibold text-mint-600 dark:text-mint-400">
              <CheckCircle2 size={14} />
              <span>Verified Credential</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
