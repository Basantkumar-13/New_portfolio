export default function SectionHeader({
  badge,
  title,
  subtitle,
  action,
  className = '',
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ${className}`}>
      <div className="space-y-2">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-mint-100 text-mint-600 text-xs font-mono font-medium border border-mint-200">
            <span className="w-1.5 h-1.5 rounded-full bg-mint-400" />
            {badge}
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary-dark">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base text-text-secondary-dark max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
