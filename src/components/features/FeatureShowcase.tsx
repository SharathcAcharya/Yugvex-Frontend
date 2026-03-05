import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRobot, FaTrophy, FaChartLine, FaBolt, FaStar, FaUsers } from 'react-icons/fa';

interface FeatureShowcaseProps {
  /** Which side the visual appears on */
  visualPosition?: 'left' | 'right';
  /** Gradient direction for the container */
  gradientDirection?: 'to-br' | 'to-bl' | 'to-tr' | 'to-tl';
  /** Primary accent color for glows */
  accentColor?: 'cyan' | 'violet' | 'pink' | 'green';
  /** Feature data */
  feature: {
    badge?: string;
    headline: string[];
    description: string;
    visual: 'ai-coach' | 'leaderboard' | 'achievements' | 'dashboard';
  };
}

const accentMap = {
  cyan: {
    glow: 'from-brand-primary/40 to-brand-primary/10',
    text: 'text-brand-primary',
    border: 'border-brand-primary/30',
    shadow: 'shadow-brand-primary/20',
    bg: 'bg-brand-primary',
  },
  violet: {
    glow: 'from-brand-secondary/40 to-brand-secondary/10',
    text: 'text-brand-secondary',
    border: 'border-brand-secondary/30',
    shadow: 'shadow-brand-secondary/20',
    bg: 'bg-brand-secondary',
  },
  pink: {
    glow: 'from-brand-accent/40 to-brand-accent/10',
    text: 'text-brand-accent',
    border: 'border-brand-accent/30',
    shadow: 'shadow-brand-accent/20',
    bg: 'bg-brand-accent',
  },
  green: {
    glow: 'from-emerald-500/40 to-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    shadow: 'shadow-emerald-500/20',
    bg: 'bg-emerald-500',
  },
};

// === VISUAL COMPONENTS ===

const AICoachVisual = () => (
  <div className="relative">
    {/* Phone Frame */}
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative w-64 sm:w-72 bg-surface-raised rounded-[2.5rem] border border-surface-glass-border shadow-2xl shadow-black/50 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Notch */}
      <div className="h-7 bg-black flex items-center justify-center">
        <div className="w-20 h-5 bg-black rounded-full" />
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-4 bg-gradient-to-b from-surface-raised to-surface-base">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center">
            <FaRobot className="text-white text-sm" />
          </div>
          <div>
            <div className="text-white font-semibold text-sm">AI Coach</div>
            <div className="text-text-tertiary text-xs">Your productivity guide</div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-brand-secondary/20 border border-brand-secondary/30 rounded-2xl rounded-tl-sm p-3"
          >
            <p className="text-xs text-white">Based on your streak, I recommend tackling "Deploy Feature X" first. You're most focused in the morning! 🎯</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-surface-glass border border-surface-glass-border rounded-2xl rounded-tr-sm p-3 ml-8"
          >
            <p className="text-xs text-text-secondary">Sounds good! What's the XP reward?</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="bg-brand-secondary/20 border border-brand-secondary/30 rounded-2xl rounded-tl-sm p-3"
          >
            <p className="text-xs text-white">This quest awards <span className="text-brand-primary font-bold">+500 XP</span> and unlocks the "Morning Hero" badge! 🏆</p>
          </motion.div>
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 bg-surface-glass border border-surface-glass-border rounded-full p-2">
          <input 
            type="text" 
            placeholder="Ask your AI Coach..." 
            className="flex-1 bg-transparent text-xs text-white placeholder-text-tertiary outline-none px-2"
            disabled
          />
          <div className="w-6 h-6 rounded-full bg-brand-secondary flex items-center justify-center">
            <FaBolt className="text-white text-[10px]" />
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating Accent Elements */}
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-pink-600 flex items-center justify-center shadow-lg shadow-brand-accent/30"
    >
      <FaStar className="text-white" />
    </motion.div>
  </div>
);

const LeaderboardVisual = () => (
  <div className="relative">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-72 sm:w-80 bg-surface-raised/90 backdrop-blur-xl rounded-2xl border border-surface-glass-border shadow-2xl shadow-black/50 overflow-hidden"
    >
      {/* Header */}
      <div className="p-4 border-b border-surface-glass-border bg-gradient-to-r from-yellow-500/10 to-transparent">
        <div className="flex items-center gap-2">
          <FaTrophy className="text-yellow-400" />
          <span className="text-white font-bold">Weekly Leaderboard</span>
        </div>
        <p className="text-text-tertiary text-xs mt-1">Top performers this week</p>
      </div>

      {/* Leaderboard Entries */}
      <div className="p-4 space-y-3">
        {[
          { rank: 1, name: 'Alex Chen', xp: '15,420', avatar: 'from-yellow-400 to-orange-500', badge: '🔥', highlight: false },
          { rank: 2, name: 'Jordan Kim', xp: '14,890', avatar: 'from-gray-300 to-gray-400', badge: '⚡', highlight: false },
          { rank: 3, name: 'You', xp: '14,250', avatar: 'from-brand-primary to-brand-secondary', badge: '🚀', highlight: true },
          { rank: 4, name: 'Sam Wilson', xp: '13,100', avatar: 'from-purple-400 to-pink-500', badge: '', highlight: false },
        ].map((player, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            viewport={{ once: true }}
            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
              player.highlight 
                ? 'bg-brand-primary/10 border border-brand-primary/30' 
                : 'hover:bg-surface-glass'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              player.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
              player.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
              player.rank === 3 ? 'bg-amber-600/20 text-amber-500' :
              'bg-surface-glass text-text-tertiary'
            }`}>
              {player.rank}
            </div>
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${player.avatar}`} />
            <div className="flex-1">
              <div className="text-white text-sm font-medium flex items-center gap-1">
                {player.name} {player.badge}
              </div>
              <div className="text-text-tertiary text-xs font-mono">{player.xp} XP</div>
            </div>
            {player.highlight && (
              <div className="text-brand-primary text-xs font-bold">+2 ↑</div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Floating Crown */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/30"
    >
      <span className="text-2xl">👑</span>
    </motion.div>
  </div>
);

const AchievementsVisual = () => (
  <div className="relative">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-72 sm:w-80"
    >
      {/* Achievement Unlock Card */}
      <div className="bg-surface-raised/90 backdrop-blur-xl rounded-2xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/10 overflow-hidden">
        {/* Header Glow */}
        <div className="h-2 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400" />
        
        <div className="p-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30"
          >
            <span className="text-4xl">🏆</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Achievement Unlocked</div>
            <div className="text-white text-xl font-bold mb-2">Consistency King</div>
            <p className="text-text-secondary text-sm mb-4">Complete a 30-day streak without missing a single quest</p>
            
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-brand-primary">
                <FaBolt />
                <span className="font-bold">+2,500 XP</span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span>Legendary</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mini Achievement Cards */}
      <div className="flex justify-center gap-3 mt-4">
        {['🎯', '⚡', '🔥'].map((emoji, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 + i * 0.1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -4, 0] }}
            className="w-12 h-12 rounded-xl bg-surface-glass border border-surface-glass-border flex items-center justify-center text-xl shadow-lg"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);

const DashboardVisual = () => (
  <div className="relative">
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 5 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-80 sm:w-96 bg-surface-raised/90 backdrop-blur-xl rounded-2xl border border-surface-glass-border shadow-2xl shadow-black/50 overflow-hidden"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-surface-glass-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-text-tertiary ml-2 font-mono">yugvex.app/dashboard</span>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Level', value: '42', color: 'brand-primary' },
            { label: 'XP', value: '89K', color: 'brand-secondary' },
            { label: 'Streak', value: '14🔥', color: 'brand-accent' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              viewport={{ once: true }}
              className={`p-3 rounded-xl bg-${stat.color}/10 border border-${stat.color}/20`}
            >
              <div className={`text-${stat.color} text-lg font-bold`}>{stat.value}</div>
              <div className="text-text-tertiary text-[10px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-surface-glass rounded-xl p-3 border border-surface-glass-border"
        >
          <div className="flex justify-between text-xs mb-2">
            <span className="text-white font-medium">Daily Quest Progress</span>
            <span className="text-brand-primary">4/6</span>
          </div>
          <div className="h-2 bg-surface-base rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '66%' }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
            />
          </div>
        </motion.div>

        {/* Squad Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-surface-glass rounded-xl p-3 border border-surface-glass-border"
        >
          <div className="flex items-center gap-2 mb-2">
            <FaUsers className="text-brand-secondary text-xs" />
            <span className="text-white text-xs font-medium">Squad Activity</span>
          </div>
          <div className="flex -space-x-2">
            {['from-cyan-400 to-blue-500', 'from-purple-400 to-pink-500', 'from-green-400 to-emerald-500', 'from-orange-400 to-red-500'].map((g, i) => (
              <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-surface-raised`} />
            ))}
            <div className="w-7 h-7 rounded-full bg-surface-base border-2 border-surface-raised flex items-center justify-center text-[8px] text-text-tertiary">+5</div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Floating Notification */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      viewport={{ once: true }}
      animate={{ y: [0, -5, 0] }}
      className="absolute -right-4 top-12 bg-surface-raised/95 backdrop-blur-xl rounded-xl border border-brand-primary/30 p-3 shadow-xl max-w-[160px]"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center">
          <FaChartLine className="text-brand-primary text-xs" />
        </div>
        <div>
          <div className="text-white text-[10px] font-semibold">Leveled Up!</div>
          <div className="text-text-tertiary text-[9px]">You reached Level 42</div>
        </div>
      </div>
    </motion.div>
  </div>
);

const visualComponents = {
  'ai-coach': AICoachVisual,
  'leaderboard': LeaderboardVisual,
  'achievements': AchievementsVisual,
  'dashboard': DashboardVisual,
};

// === MAIN COMPONENT ===

const FeatureShowcase = ({ 
  visualPosition = 'left',
  gradientDirection = 'to-br',
  accentColor = 'cyan',
  feature,
}: FeatureShowcaseProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const accent = accentMap[accentColor];
  const VisualComponent = visualComponents[feature.visual];

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Large Rounded Container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`relative rounded-[3rem] overflow-hidden bg-gradient-${gradientDirection} from-surface-raised via-surface-raised to-surface-base border border-surface-glass-border`}
        >
          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-30 blur-3xl`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
          
          {/* Content Grid */}
          <div className={`relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 sm:p-12 lg:p-16 ${
            visualPosition === 'right' ? 'lg:flex-row-reverse' : ''
          }`}>
            
            {/* Visual Side */}
            <div className={`flex justify-center ${visualPosition === 'right' ? 'lg:order-2' : ''}`}>
              <VisualComponent />
            </div>

            {/* Text Side */}
            <div className={`text-center lg:text-left ${visualPosition === 'right' ? 'lg:order-1' : ''}`}>
              {/* Badge */}
              {feature.badge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${accent.bg}/10 border ${accent.border} mb-6`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${accent.bg}`} />
                  <span className={`text-xs font-semibold ${accent.text} uppercase tracking-wider`}>{feature.badge}</span>
                </motion.div>
              )}

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6"
              >
                {feature.headline.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                {feature.description}
              </motion.p>
            </div>
          </div>

          {/* Decorative floating orbs */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br ${accent.glow} blur-2xl opacity-40`}
          />
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
