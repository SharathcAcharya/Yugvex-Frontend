import { FaBolt, FaFire, FaTrophy, FaUsers, FaRocket, FaStar, FaGem, FaBrain } from 'react-icons/fa';
import type { ReactNode } from 'react';

interface MarqueeBandProps {
  /** Direction of scroll */
  direction?: 'left' | 'right';
  /** Speed in seconds for one complete cycle */
  duration?: number;
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Custom content items */
  items?: Array<{ text: string; icon?: ReactNode }>;
}

const defaultItems = [
  { text: 'COMPETE', icon: <FaTrophy /> },
  { text: 'COLLABORATE', icon: <FaUsers /> },
  { text: 'LEVEL UP', icon: <FaRocket /> },
  { text: 'ACHIEVE', icon: <FaStar /> },
  { text: 'FOCUS', icon: <FaBrain /> },
  { text: 'WIN', icon: <FaFire /> },
  { text: 'PLAY', icon: <FaGem /> },
  { text: 'GROW', icon: <FaBolt /> },
];

const variantStyles = {
  primary: {
    bg: 'bg-brand-primary',
    text: 'text-surface-base',
    iconOpacity: 'opacity-60',
  },
  secondary: {
    bg: 'bg-brand-secondary',
    text: 'text-white',
    iconOpacity: 'opacity-50',
  },
  accent: {
    bg: 'bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent',
    text: 'text-white',
    iconOpacity: 'opacity-60',
  },
};

const MarqueeBand = ({
  direction = 'left',
  duration = 30,
  variant = 'primary',
  items = defaultItems,
}: MarqueeBandProps) => {
  const styles = variantStyles[variant];
  
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden ${styles.bg} py-4 sm:py-5`}>
      {/* Marquee Container */}
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 sm:gap-6 px-6 sm:px-10 ${styles.text}`}
          >
            {/* Icon */}
            {item.icon && (
              <span className={`text-lg sm:text-xl ${styles.iconOpacity}`}>
                {item.icon}
              </span>
            )}
            
            {/* Text */}
            <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wide">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {/* Edge fade effects (optional subtle touch) */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-brand-primary/20 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-brand-primary/20 to-transparent pointer-events-none" />

      {/* CSS Animation Keyframes */}
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

/**
 * Dual-row marquee for more visual impact
 * Two bands moving in opposite directions
 */
export const DualMarqueeBand = () => {
  const topItems = [
    { text: 'COMPETE', icon: <FaTrophy /> },
    { text: 'COLLABORATE', icon: <FaUsers /> },
    { text: 'LEVEL UP', icon: <FaRocket /> },
    { text: 'ACHIEVE', icon: <FaStar /> },
  ];

  const bottomItems = [
    { text: 'FOCUS', icon: <FaBrain /> },
    { text: 'WIN', icon: <FaFire /> },
    { text: 'PLAY', icon: <FaGem /> },
    { text: 'GROW', icon: <FaBolt /> },
  ];

  return (
    <div className="relative">
      <MarqueeBand 
        items={topItems} 
        direction="left" 
        duration={25}
        variant="primary"
      />
      <MarqueeBand 
        items={bottomItems} 
        direction="right" 
        duration={30}
        variant="secondary"
      />
    </div>
  );
};

/**
 * Minimal single-line marquee with gradient background
 */
export const GradientMarqueeBand = () => {
  return (
    <section className="relative py-2 overflow-hidden bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
      <div
        className="flex whitespace-nowrap items-center"
        style={{
          animation: 'marquee-left 40s linear infinite',
        }}
      >
        {[...Array(8)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {defaultItems.map((item, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-4 px-8 text-white"
              >
                <span className="text-lg opacity-70">{item.icon}</span>
                <span className="text-xl sm:text-2xl font-black tracking-wider">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

/**
 * Outlined/Ghost style marquee for subtle placement
 */
export const OutlineMarqueeBand = () => {
  const items = [
    { text: 'QUESTS' },
    { text: 'SQUADS' },
    { text: 'XP' },
    { text: 'ACHIEVEMENTS' },
    { text: 'LEADERBOARDS' },
    { text: 'AI COACH' },
    { text: 'FOCUS' },
    { text: 'REWARDS' },
  ];

  return (
    <section className="relative py-8 overflow-hidden bg-surface-base border-y border-surface-glass-border">
      <div
        className="flex whitespace-nowrap items-center"
        style={{
          animation: 'marquee-left 50s linear infinite',
        }}
      >
        {[...Array(6)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {items.map((item, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-8 px-8"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-tertiary to-text-secondary">
                  {item.text}
                </span>
                <span className="text-brand-primary/40 text-2xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default MarqueeBand;
