import { motion } from 'framer-motion';

// Import logo images
import logoFull from '../../assets/img1.png';
import logoIcon from '../../assets/img2.png';

interface LogoProps {
  variant?: 'full' | 'icon' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'massive';
  animated?: boolean;
  className?: string;
}

// Size mappings - MUCH LARGER for proper brand presence
const sizes = {
  icon: {
    sm: { width: 100, height: 100 },
    md: { width: 130, height: 130 },
    lg: { width: 180, height: 180 },
    xl: { width: 240, height: 240 },
    massive: { width: 320, height: 320 },
  },
  full: {
    sm: { width: 480, height: 120 },
    md: { width: 600, height: 150 },
    lg: { width: 760, height: 190 },
    xl: { width: 920, height: 230 },
    massive: { width: 1100, height: 275 },
  },
};

/**
 * YugvexIcon - Clean icon implementation (img2.png)
 * Used in footer, dashboard sidebar
 */
export const YugvexIcon = ({ 
  size = 'md', 
  animated = true,
  className = '' 
}: Omit<LogoProps, 'variant'>) => {
  const dims = sizes.icon[size];
  
  return (
    <motion.div
      className={`relative flex-shrink-0 ${className}`}
      initial={animated ? { scale: 0.95, opacity: 0 } : {}}
      animate={animated ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: dims.width, height: dims.height }}
    >
      {/* Subtle background glow - minimal and natural */}
      <div 
        className="absolute -inset-4 opacity-20 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(124,58,237,0.2) 50%, transparent 100%)'
        }}
      />
      
      {/* Logo image - clean, no excessive processing */}
      <img 
        src={logoIcon} 
        alt="Yugvex" 
        className="relative z-10 w-full h-full object-contain"
        style={{
          filter: 'brightness(1.05) contrast(1.05)',
        }}
      />
    </motion.div>
  );
};

/**
 * YugvexWordmark - Typography component
 */
export const YugvexWordmark = ({ 
  size = 'md',
  className = '' 
}: Omit<LogoProps, 'variant'>) => {
  const textSizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
    massive: 'text-6xl',
  };
  
  return (
    <span 
      className={`font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${textSizes[size]} ${className}`}
    >
      Yugvex
    </span>
  );
};

/**
 * YugvexLogoFull - Clean full logo implementation (img1.png)
 * PRIMARY BRAND IDENTITY
 */
export const YugvexLogoFull = ({ 
  size = 'md', 
  animated = true,
  className = '' 
}: Omit<LogoProps, 'variant'>) => {
  const dims = sizes.full[size];
  
  return (
    <motion.div
      className={`relative flex-shrink-0 ${className}`}
      initial={animated ? { opacity: 0, x: -20 } : {}}
      animate={animated ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: dims.width, height: dims.height }}
    >
      {/* Subtle ambient glow - natural and integrated */}
      <div 
        className="absolute -inset-6 opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.25) 0%, rgba(124,58,237,0.15) 50%, transparent 100%)'
        }}
      />
      
      {/* Logo image - clean and professional */}
      <img 
        src={logoFull} 
        alt="Yugvex" 
        className="relative z-10 w-full h-full object-contain"
        style={{
          filter: 'brightness(1.08) contrast(1.05)',
        }}
      />
    </motion.div>
  );
};

/**
 * YugvexLogo - Unified component with variant switching
 */
const YugvexLogo = ({ 
  variant = 'full', 
  size = 'md',
  animated = true,
  className = '' 
}: LogoProps) => {
  if (variant === 'icon') {
    return <YugvexIcon size={size} animated={animated} className={className} />;
  }
  
  if (variant === 'wordmark') {
    return <YugvexWordmark size={size} className={className} />;
  }
  
  // Full logo uses the actual image with icon + wordmark
  return <YugvexLogoFull size={size} animated={animated} className={className} />;
};

export default YugvexLogo;
