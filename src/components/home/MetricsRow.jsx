import { motion } from 'motion/react';
import { Package, Code2, Flame, TrendingUp } from 'lucide-react';
import { homeMetricsData } from '../../data/analytics';

const iconMap = {
  package: Package,
  code: Code2,
  flame: Flame,
  trending: TrendingUp,
};

export default function MetricsRow() {
  return (
    <section className="mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {homeMetricsData.map((item) => {
          const Icon = iconMap[item.icon] || Code2;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="bg-white/80 dark:bg-white/[0.06] hover:bg-white/95 dark:hover:bg-white/[0.1] backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-white/90 dark:border-white/10 shadow-[0_8px_20px_-6px_rgba(14,44,36,0.06)] dark:shadow-none flex items-center gap-3.5 transition-all"
            >
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0 shadow-2xs`}
              >
                <Icon size={20} strokeWidth={2.2} />
              </div>

              <div>
                <div className="text-lg sm:text-xl font-extrabold text-[#0F261E] dark:text-white leading-none mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-[#5D7A6F] dark:text-[#8AA39B] font-medium leading-none">
                  {item.label}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
