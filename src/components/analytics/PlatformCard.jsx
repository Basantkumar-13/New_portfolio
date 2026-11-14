import { ArrowUpRight } from 'lucide-react';

export default function PlatformCard({
  platform,
  handle,
  stats,
  link,
  icon: Icon,
}) {
  return (
    <div className="glass-card p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-10 h-10 rounded-pill bg-white dark:bg-white/10 flex items-center justify-center text-text-primary-dark shadow-sm border border-black/5 dark:border-white/10">
              <Icon size={18} />
            </div>
          )}
          <div>
            <h4 className="text-sm font-bold text-text-primary-dark">{platform}</h4>
            <p className="text-xs font-mono text-text-muted-dark">{handle}</p>
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${platform}`}
            className="p-1.5 rounded-pill text-text-secondary-dark hover:text-text-primary-dark hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-black/5 dark:border-white/10 text-center">
        {stats?.map((stat, i) => (
          <div key={i} className="p-2 rounded-inner bg-white/40 dark:bg-white/[0.06] border border-black/5 dark:border-white/5">
            <div className="text-sm font-bold font-mono text-text-primary-dark">{stat.value}</div>
            <div className="text-[11px] text-text-muted-dark">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
