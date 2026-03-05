import { motion } from 'framer-motion';
import { FaTrophy, FaFire, FaBolt, FaRobot, FaCrown, FaStar, FaMedal } from 'react-icons/fa';

const ProductScene = () => {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px]">
      {/* Glow Effects Behind Scene */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-secondary/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 8 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] lg:w-[600px]"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <div className="relative bg-surface-raised/90 backdrop-blur-xl rounded-2xl border border-surface-glass-border shadow-2xl shadow-black/50 overflow-hidden">
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-surface-glass-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-text-tertiary ml-2 font-mono">app.yugvex.com</span>
          </div>

          {/* Dashboard Content */}
          <div className="p-4 space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-brand-primary/20 to-transparent p-3 rounded-xl border border-brand-primary/20"
              >
                <div className="text-brand-primary text-2xl font-bold">42</div>
                <div className="text-text-tertiary text-xs">Level</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-brand-secondary/20 to-transparent p-3 rounded-xl border border-brand-secondary/20"
              >
                <div className="text-brand-secondary text-2xl font-bold">89K</div>
                <div className="text-text-tertiary text-xs">Total XP</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-brand-accent/20 to-transparent p-3 rounded-xl border border-brand-accent/20"
              >
                <div className="text-brand-accent text-2xl font-bold">127</div>
                <div className="text-text-tertiary text-xs">Quests</div>
              </motion.div>
            </div>

            {/* Active Quest */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-surface-glass p-4 rounded-xl border border-surface-glass-border"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold text-sm">🎯 Complete MVP Prototype</span>
                <span className="text-brand-primary text-xs font-mono">+500 XP</span>
              </div>
              <div className="h-2 bg-surface-base rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
                />
              </div>
              <div className="text-gray-300 text-xs mt-1">75% complete</div>
            </motion.div>

            {/* Leaderboard Preview */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="bg-surface-glass p-3 rounded-xl border border-surface-glass-border"
            >
              <div className="text-xs text-gray-200 mb-2 font-semibold">🏆 Weekly Leaderboard</div>
              <div className="space-y-2">
                {[
                  { rank: 1, name: 'Alex', xp: '12,450', color: 'text-yellow-400' },
                  { rank: 2, name: 'Jordan', xp: '11,200', color: 'text-gray-300' },
                  { rank: 3, name: 'You', xp: '10,890', color: 'text-amber-600', highlight: true },
                ].map((player, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className={`flex items-center justify-between text-xs p-2 rounded-lg ${player.highlight ? 'bg-brand-primary/10 border border-brand-primary/30' : ''}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${player.color}`}>#{player.rank}</span>
                      <span className="text-white">{player.name}</span>
                    </div>
                    <span className="text-gray-300 font-mono">{player.xp} XP</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Cards - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-32 -left-4 lg:left-0"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-surface-raised/90 backdrop-blur-xl p-4 rounded-2xl border border-brand-secondary/30 shadow-xl shadow-brand-secondary/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center">
              <FaRobot className="text-white text-lg" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">AI Coach</div>
              <div className="text-gray-300 text-xs">Ready to help</div>
            </div>
          </div>
          <div className="mt-3 p-2 bg-surface-glass rounded-lg">
            <p className="text-xs text-gray-200 italic">"Focus on high-impact tasks first!"</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Cards - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 15 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute top-20 -right-4 lg:right-0"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="bg-surface-raised/90 backdrop-blur-xl p-4 rounded-2xl border border-brand-primary/30 shadow-xl shadow-brand-primary/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <FaTrophy className="text-yellow-400" />
            <span className="text-white font-semibold text-sm">Achievement Unlocked!</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <FaCrown className="text-white text-xs" />
            </div>
            <div>
              <div className="text-yellow-400 text-xs font-bold">Early Adopter</div>
              <div className="text-gray-300 text-[10px]">+1000 XP</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Badge - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-24 left-8"
      >
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent to-pink-600 flex items-center justify-center shadow-lg shadow-brand-accent/30"
        >
          <FaFire className="text-white text-2xl" />
        </motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-surface-base"
        >
          7
        </motion.div>
      </motion.div>

      {/* Floating Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-32 right-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30"
        >
          <FaBolt className="text-white text-xl" />
        </motion.div>
      </motion.div>

      {/* Floating Stars/Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 3 + i, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
          className="absolute"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        >
          <FaStar className="text-brand-primary/40 text-xs" />
        </motion.div>
      ))}

      {/* Phone Mockup - Optional Layer */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-0 right-0 lg:right-8"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="w-36 lg:w-44 bg-surface-raised rounded-3xl border border-surface-glass-border shadow-2xl shadow-black/50 overflow-hidden"
        >
          {/* Phone Notch */}
          <div className="h-6 bg-black/60 flex items-center justify-center">
            <div className="w-16 h-4 bg-black rounded-full" />
          </div>
          {/* Phone Content */}
          <div className="p-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary" />
              <div>
                <div className="w-16 h-2 bg-surface-glass rounded" />
                <div className="w-10 h-1.5 bg-surface-glass rounded mt-1" />
              </div>
            </div>
            <div className="bg-surface-glass p-2 rounded-xl">
              <div className="text-[8px] text-brand-primary font-semibold">Daily Streak</div>
              <div className="flex gap-1 mt-1">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`w-3 h-3 rounded ${i < 5 ? 'bg-brand-primary' : 'bg-surface-glass-border'}`} />
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-surface-glass rounded-xl">
              <FaMedal className="text-yellow-400 text-sm" />
              <div className="text-[8px] text-white">Rank #3</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductScene;
