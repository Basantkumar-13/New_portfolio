import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Moon, Sun } from 'lucide-react';
import Sidebar from './Sidebar';
import MobileNavigation from './MobileNavigation';
import { useTheme } from '../../context/ThemeContext';

export default function MainLayout() {
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  return (
    <div className="min-h-screen ambient-glow-backdrop flex transition-colors duration-300">
      {/* Persistent Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 transition-all duration-300 md:pl-[104px] px-4 sm:px-6 md:pr-8 py-5 pb-24 md:pb-10 max-w-[1360px] mx-auto w-full flex flex-col">
        {/* Top Header Bar matching reference mockup */}
        <header className="flex items-center justify-between h-12 mb-6">
          <div className="flex items-center pl-10 md:pl-0">
            <span className="text-sm font-bold tracking-tight text-[#0F261E] dark:text-white transition-colors">
              Basant Yadav
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Basant_Yadav_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#102D26] hover:bg-[#163D34] dark:bg-[#8EE2B2] dark:hover:bg-[#A3EFC5] text-white dark:text-[#071F19] text-xs font-semibold shadow-sm transition-all duration-150 active:scale-95"
            >
              <Download size={13} strokeWidth={2.5} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-[#2C4A3E] dark:text-[#8EE2B2] border border-black/5 dark:border-white/10 flex items-center justify-center transition-all shadow-2xs cursor-pointer active:scale-90"
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun size={15} strokeWidth={2} className="text-[#8EE2B2]" />
              ) : (
                <Moon size={15} strokeWidth={2} className="text-[#2C4A3E]" />
              )}
            </button>
          </div>
        </header>

        {/* Animated Page Outlet */}
        <main className="flex-1 w-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Dock Navigation */}
      <MobileNavigation />
    </div>
  );
}
