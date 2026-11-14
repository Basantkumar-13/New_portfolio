import { motion } from 'motion/react';
import { Package, Code2, Flame, TrendingUp } from 'lucide-react';

export default function MetricsRow() {
  const stats = [
    {
      id: 'projects',
      value: '15+',
      label: 'Projects',
      icon: Package,
      iconBg: 'bg-[#EAF6EE]',
      iconColor: 'text-[#136C49]',
    },
    {
      id: 'problems',
      value: '1,324+',
      label: 'Problems Solved',
      icon: Code2,
      iconBg: 'bg-[#EDF3EF]',
      iconColor: 'text-[#2C4A3E]',
    },
    {
      id: 'streak',
      value: '47',
      label: 'Day Streak',
      icon: Flame,
      iconBg: 'bg-[#FFF3E8]',
      iconColor: 'text-[#F97316]',
    },
    {
      id: 'learning',
      value: '2+',
      label: 'Years Learning',
      icon: TrendingUp,
      iconBg: 'bg-[#EBF3FE]',
      iconColor: 'text-[#2563EB]',
    },
  ];

  return (
    <section className="mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
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
