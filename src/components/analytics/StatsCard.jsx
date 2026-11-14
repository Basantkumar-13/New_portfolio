import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { MOTION_SPRINGS } from '../../styles/theme';

export default function StatsCard({
  title,
  value,
  change,
  isPositive = true,
  icon: Icon,
  subtitle,
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={MOTION_SPRINGS.cardHover}
      className="glass-card p-5 relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-text-secondary-dark">{title}</span>
        {Icon && (
          <div className="p-2 rounded-pill bg-mint-100 dark:bg-white/10 text-mint-600 dark:text-mint-400">
            <Icon size={16} />
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-bold tracking-tight text-text-primary-dark font-mono">
          {value}
        </span>
        {change && (
          <span
            className={`inline-flex items-center text-xs font-medium font-mono ${
              isPositive ? 'text-mint-600' : 'text-rose-500'
            }`}
          >
            {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
            {change}
          </span>
        )}
      </div>
      {subtitle && <p className="text-xs text-text-muted-dark">{subtitle}</p>}
    </motion.div>
  );
}
