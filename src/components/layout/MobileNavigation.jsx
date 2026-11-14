import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { navItems } from './Sidebar';
import { MOTION_SPRINGS } from '../../styles/theme';

export default function MobileNavigation() {
  return (
    <nav className="md:hidden fixed bottom-4 left-3 right-3 z-40 glass-obsidian p-1.5 rounded-pill flex items-center justify-around shadow-2xl overflow-x-auto no-scrollbar gap-0.5">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            title={item.label}
            className={({ isActive }) =>
              `relative p-2.5 rounded-pill transition-colors shrink-0 ${
                isActive ? 'text-obsidian-950' : 'text-text-secondary-light hover:text-text-primary-light'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeMobileIndicator"
                    transition={MOTION_SPRINGS.activeIndicator}
                    className="absolute inset-0 bg-mint-200 rounded-pill shadow-mint-glow -z-0"
                  />
                )}
                <Icon size={18} className="relative z-10" />
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
