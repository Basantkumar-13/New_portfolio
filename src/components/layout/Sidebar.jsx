import { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  Home,
  Sparkles,
  Code2,
  BarChart2,
  Trophy,
  Mail,
  Sun,
  Moon,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from '../common/Icons';
import { useTheme } from '../../context/ThemeContext';

export const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/skills', label: 'Skills', icon: Sparkles },
  { path: '/projects', label: 'Projects', icon: Code2 },
  { path: '/analytics', label: 'Analytics', icon: BarChart2 },
  { path: '/achievements', label: 'Achievements', icon: Trophy },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [isClickFolded, setIsClickFolded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const { toggleTheme, isDark } = useTheme();
  const leaveTimeoutRef = useRef(null);

  // Unfolded when hovered or focused, unless explicitly folded by clicking an item
  const isExpanded = (isHovered || isFocused) && !isClickFolded;

  const handlePointerEnter = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setIsClickFolded(false);
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setIsClickFolded(false);
      setHoveredPath(null);
    }, 150);
  };

  // When clicking ANY navigation link: immediately fold the sidebar
  const handleItemClick = () => {
    setIsClickFolded(true);
    setIsHovered(false);
    setIsFocused(false);
    setIsMobileOpen(false);
  };

  const springPhysics = shouldReduceMotion
    ? { duration: 0.12 }
    : { type: 'spring', stiffness: 360, damping: 28, mass: 0.75 };

  const fluidGlide = shouldReduceMotion
    ? { duration: 0.1 }
    : { type: 'spring', stiffness: 450, damping: 30 };

  return (
    <>
      {/* ------------------------------------------------------------- */}
      {/* MOBILE TRIGGER BUTTON                                         */}
      {/* ------------------------------------------------------------- */}
      <div className="md:hidden fixed top-4 left-4 z-40">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="w-10 h-10 rounded-2xl bg-[#071F19]/90 backdrop-blur-xl text-[#8EE2B2] flex items-center justify-center shadow-lg border border-white/15 active:scale-95 transition-transform cursor-pointer"
          aria-label="Open Navigation Menu"
        >
          <span className="font-mono text-sm font-extrabold">//</span>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE OFF-CANVAS DRAWER                                      */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={shouldReduceMotion ? { duration: 0.15 } : { type: 'spring', damping: 28, stiffness: 320 }}
              className="md:hidden fixed top-0 bottom-0 left-0 w-[270px] z-50 bg-[#071F19]/95 backdrop-blur-2xl p-5 flex flex-col justify-between shadow-2xl border-r border-white/15"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[#8EE2B2] font-extrabold text-2xl tracking-tighter">//</span>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">Basant Yadav</p>
                      <p className="text-xs text-[#8AA39B] font-medium leading-none mt-0.5">AI/ML Engineer</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-1.5 rounded-full text-white/70 hover:text-white cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                        onClick={handleItemClick}
                        className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-[#A3EFC5] to-[#7CE0A6] text-[#071F19] font-bold shadow-[0_4px_16px_rgba(142,226,178,0.4)]'
                            : 'text-[#8AA39B] hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon size={19} className="shrink-0" />
                        <span className="text-sm">{item.label}</span>
                      </NavLink>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-around">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={17} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={17} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={17} />
                </a>
                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-[#8EE2B2] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun size={17} /> : <Moon size={17} />}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP FROSTED GLASS BACKDROP OVERLAY                        */}
      {/* Blurs page content when unfolded matching the reference image */}
      {/* ------------------------------------------------------------- */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={handleItemClick}
            className="hidden md:block fixed inset-0 bg-[#061713]/30 z-30 cursor-pointer"
          />
        )}
      </AnimatePresence>

      {/* ------------------------------------------------------------- */}
      {/* DESKTOP FLUID UNFOLDING SIDEBAR                               */}
      {/* Folded: 76px | Unfolded: 240px                                */}
      {/* ------------------------------------------------------------- */}
      <motion.aside
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onFocusCapture={() => setIsFocused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false);
          }
        }}
        initial={false}
        animate={{ width: isExpanded ? 240 : 76 }}
        transition={springPhysics}
        className="hidden md:flex flex-col justify-between fixed left-4 top-4 bottom-4 z-40 bg-[#071F19]/90 dark:bg-[#071F19]/95 backdrop-blur-2xl backdrop-saturate-150 py-5 px-3 select-none rounded-[28px] shadow-[0_24px_50px_-12px_rgba(0,18,14,0.55),inset_0_1px_1px_0_rgba(255,255,255,0.22),inset_0_-1px_1px_0_rgba(0,0,0,0.35)] border border-white/15 overflow-hidden transition-colors"
        aria-label="Primary Navigation"
      >
        {/* Specular Liquid Sheen Overlay */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/[0.12] via-transparent to-black/[0.25] pointer-events-none z-0" />

        {/* Top Header / Logo Section */}
        <div className="relative z-10 shrink-0 mb-6">
          <div className="flex items-center gap-3.5 px-2 h-10 overflow-hidden">
            <span className="font-mono text-[#8EE2B2] font-extrabold text-2xl tracking-tighter shrink-0 select-none cursor-pointer drop-shadow-[0_0_8px_rgba(142,226,178,0.4)]">
              //
            </span>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -10, filter: 'blur(3px)' }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="whitespace-nowrap overflow-hidden"
                >
                  <h2 className="text-sm font-bold text-white tracking-tight leading-tight">
                    Basant Yadav
                  </h2>
                  <p className="text-xs text-[#8AA39B] font-medium leading-none mt-0.5">
                    AI/ML Engineer
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Main Navigation Items with Fluid Indicators */}
        <nav
          onMouseLeave={() => setHoveredPath(null)}
          className="relative z-10 flex-1 flex flex-col gap-2 w-full justify-center"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            const isHoveredItem = hoveredPath === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={handleItemClick}
                onMouseEnter={() => setHoveredPath(item.path)}
                className="relative flex items-center h-11 w-full rounded-2xl cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8EE2B2]"
                aria-label={item.label}
              >
                {/* 1. Fluid Active Mint Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeSidebarItemPill"
                    transition={springPhysics}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#A3EFC5] via-[#8EE2B2] to-[#7CE0A6] shadow-[0_0_24px_rgba(142,226,178,0.55),0_4px_12px_rgba(142,226,178,0.35),inset_0_1px_2px_rgba(255,255,255,0.85)] z-0"
                  />
                )}

                {/* 2. Fluid Gliding Glass Hover Capsule */}
                {!isActive && isHoveredItem && (
                  <motion.div
                    layoutId="hoverFluidGlassCapsule"
                    transition={fluidGlide}
                    className="absolute inset-0 rounded-2xl bg-white/[0.09] backdrop-blur-md border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)] z-0"
                  />
                )}

                {/* 3. Icon + Fluid Label Content Row */}
                <div className="relative z-10 flex items-center w-full px-3.5">
                  <div className="w-5 flex items-center justify-center shrink-0">
                    <Icon
                      size={19}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={`transition-colors duration-200 ${
                        isActive
                          ? 'text-[#071F19]'
                          : isHoveredItem
                          ? 'text-[#8EE2B2] drop-shadow-[0_0_8px_rgba(142,226,178,0.6)]'
                          : 'text-[#6D8E82]'
                      }`}
                    />
                  </div>

                  {/* Smooth Fluid Label Reveal */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -8, filter: 'blur(3px)' }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className={`ml-3.5 text-sm whitespace-nowrap overflow-hidden transition-colors ${
                          isActive
                            ? 'font-bold text-[#071F19]'
                            : isHoveredItem
                            ? 'font-semibold text-white'
                            : 'font-medium text-[#8AA39B]'
                        }`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Social Glass Dock & Theme Switcher */}
        <div className="relative z-10 shrink-0 pt-4 border-t border-white/10 w-full overflow-hidden">
          {isExpanded ? (
            <motion.div
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 6, filter: 'blur(3px)' }}
              transition={{ duration: 0.18 }}
              className="flex items-center justify-between px-1"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] text-[#8AA39B] hover:text-white flex items-center justify-center transition-all duration-150 border border-white/10 hover:scale-105 shadow-2xs"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={15} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] text-[#8AA39B] hover:text-white flex items-center justify-center transition-all duration-150 border border-white/10 hover:scale-105 shadow-2xs"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={15} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] text-[#8AA39B] hover:text-white flex items-center justify-center transition-all duration-150 border border-white/10 hover:scale-105 shadow-2xs"
                aria-label="YouTube Channel"
                title="YouTube"
              >
                <YoutubeIcon size={15} />
              </a>

              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-xl bg-white/[0.08] hover:bg-white/[0.18] text-[#8EE2B2] flex items-center justify-center transition-all duration-150 border border-white/10 hover:scale-105 shadow-2xs cursor-pointer"
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={15} strokeWidth={2} /> : <Moon size={15} strokeWidth={2} />}
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center w-full">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-2xl bg-white/[0.06] hover:bg-white/[0.14] text-[#8EE2B2] flex items-center justify-center transition-all border border-white/10 cursor-pointer active:scale-90"
                aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} className="text-[#6D8E82]" />}
              </button>
            </div>
          )}
        </div>
      </motion.aside>
    </>
  );
}