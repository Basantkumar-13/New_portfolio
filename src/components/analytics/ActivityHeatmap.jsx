import SectionHeader from '../common/SectionHeader';

export default function ActivityHeatmap({ weeks = 16 }) {
  // Activity matrix representation (e.g. GitHub commit style)
  return (
    <div className="glass-card p-6">
      <SectionHeader
        badge="OBSERVABILITY"
        title="Engineering Activity & Cadence"
        subtitle="Distribution of commits, reviews, and deployments over time."
      />
      <div className="overflow-x-auto pb-2">
        <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[500px]">
          {Array.from({ length: weeks * 7 }).map((_, i) => {
            const intensity = (i * 13) % 5;
            const colors = [
              'bg-white/60 dark:bg-white/10 border-white dark:border-white/10',
              'bg-mint-200/50 dark:bg-mint-500/20 border-mint-200 dark:border-mint-500/30',
              'bg-mint-300/70 dark:bg-mint-500/40 border-mint-300 dark:border-mint-500/50',
              'bg-mint-400 dark:bg-mint-400/70 border-mint-400 dark:border-mint-400/80',
              'bg-mint-500 dark:bg-mint-400 border-mint-500 dark:border-mint-300',
            ];
            return (
              <div
                key={i}
                className={`w-3.5 h-3.5 rounded-sm border ${colors[intensity]} transition-colors hover:ring-2 hover:ring-mint-400`}
                title={`Activity index ${i}`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-text-muted-dark pt-4 mt-2 border-t border-black/5 dark:border-white/10">
        <span>Less active</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-sm bg-white/60 dark:bg-white/10 border border-white dark:border-white/10" />
          <span className="w-2.5 h-2.5 rounded-sm bg-mint-200 dark:bg-mint-500/30" />
          <span className="w-2.5 h-2.5 rounded-sm bg-mint-300 dark:bg-mint-500/50" />
          <span className="w-2.5 h-2.5 rounded-sm bg-mint-400 dark:bg-mint-400/70" />
          <span className="w-2.5 h-2.5 rounded-sm bg-mint-500 dark:bg-mint-400" />
        </div>
        <span>More active</span>
      </div>
    </div>
  );
}
