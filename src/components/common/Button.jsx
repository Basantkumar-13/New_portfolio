import { motion } from 'motion/react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none';
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 rounded-pill gap-1.5',
    md: 'text-sm px-4 py-2 rounded-pill gap-2',
    lg: 'text-base px-6 py-3 rounded-pill gap-2.5',
    icon: 'p-2 rounded-pill',
  };

  const variantStyles = {
    primary: 'bg-obsidian-950 text-text-primary-light hover:bg-obsidian-900 border border-obsidian shadow-sm',
    mint: 'bg-mint-200 text-obsidian-950 hover:bg-mint-300 font-semibold shadow-mint-glow',
    glass: 'bg-surface-glass backdrop-blur-md text-text-primary-dark hover:bg-surface-glass-hover border border-white/80 shadow-glass',
    outline: 'border border-obsidian/20 text-text-primary-dark hover:border-obsidian/40 hover:bg-white/40',
    ghost: 'text-text-secondary-dark hover:text-text-primary-dark hover:bg-white/30',
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      {children}
    </motion.button>
  );
}
