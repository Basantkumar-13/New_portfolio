/**
 * Design System Theme & Motion Constants
 * Visual Archetype: Obsidian & Mint Glassmorphism ("DevOS")
 */

export const THEME_COLORS = {
  // Canvas & Backgrounds
  canvas: '#f4f8f6',
  canvasMuted: '#edf5f1',
  
  // Dark Obsidian Surfaces
  obsidian950: '#051a14',
  obsidian900: '#08221b',
  obsidian850: '#0c2b23',
  obsidian800: '#0e332a',

  // Emerald & Mint Accents
  mint50: '#f0fdf4',
  mint100: '#ecfdf5',
  mint200: '#a7f3d0',
  mint300: '#6ee7b7',
  mint400: '#34d399',
  mint500: '#10b981',
  mint600: '#059669',
  mintGlow: 'rgba(52, 211, 153, 0.35)',

  // Typography
  textPrimaryDark: '#09221d',
  textSecondaryDark: '#4a635d',
  textMutedDark: '#789088',
  textPrimaryLight: '#f0fdf4',
  textSecondaryLight: 'rgba(240, 253, 244, 0.72)',

  // Borders
  borderGlass: 'rgba(255, 255, 255, 0.85)',
  borderObsidian: 'rgba(255, 255, 255, 0.08)',
  borderMint: 'rgba(52, 211, 153, 0.25)',
}

// Recharts gradient & stroke configurations matching reference dashboard
export const CHART_THEME = {
  strokeMint: '#34d399',
  strokeEmerald: '#059669',
  gradientMintStart: 'rgba(52, 211, 153, 0.45)',
  gradientMintEnd: 'rgba(52, 211, 153, 0.0)',
  gridBorder: 'rgba(9, 34, 29, 0.06)',
  tooltipBg: 'rgba(5, 26, 20, 0.92)',
  tooltipBorder: 'rgba(52, 211, 153, 0.25)',
}

// Motion spring definitions (following Emil Kowalski motion principles)
export const MOTION_SPRINGS = {
  // Sidebar expand/collapse & layout morphs
  sidebar: {
    type: 'spring',
    stiffness: 350,
    damping: 32,
    mass: 1,
  },
  // Card hover lift and interaction feedback
  cardHover: {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  },
  // Active pill indicator gliding transition
  activeIndicator: {
    type: 'spring',
    stiffness: 480,
    damping: 36,
  },
  // Subtle micro-tap scale
  tapFeedback: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
}
