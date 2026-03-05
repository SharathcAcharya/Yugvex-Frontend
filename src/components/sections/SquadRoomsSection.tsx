import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaVideo, FaMicrophone, FaDesktop, FaUsers, FaCrown, FaBolt } from 'react-icons/fa';

/**
 * SECTION 1: "SQUAD UP IN REAL-TIME"
 * 
 * Discord Reference: "Stream like you're in the same room"
 * - Green gradient container
 * - Video call mockup with main + thumbnails
 * - Text LEFT, Visual RIGHT
 * 
 * Yugvex Adaptation:
 * - Live Focus Room with co-working session
 * - Active challenge with teammates
 * - Real-time XP gains visible
 */

const SquadRoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Floating decorative orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-32 left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-brand-primary/20 to-emerald-500/10 blur-2xl"
      />

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          {/* Main Container with Green Gradient */}
          <div className="relative bg-gradient-to-br from-emerald-600/90 via-emerald-700/80 to-teal-800/90 border border-emerald-500/20">
            {/* Inner glow layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(16,185,129,0.2),transparent_60%)]" />
            
            {/* Content Grid */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              
              {/* LEFT: Text Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6"
                >
                  <FaVideo className="text-emerald-300 text-xs" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">Live Rooms</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6"
                >
                  <span className="block">SQUAD UP</span>
                  <span className="block">IN REAL-TIME</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-emerald-100/80 leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  Join focus rooms with your squad. See who's grinding, share your screen, 
                  and earn bonus XP for co-working sessions. It's like body doubling, but gamified.
                </motion.p>
              </div>

              {/* RIGHT: Focus Room Visual */}
              <div className="relative flex justify-center lg:justify-end">
                {/* Main Video Container */}
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative"
                >
                  {/* Glow behind */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/30 to-cyan-400/20 rounded-3xl blur-2xl" />
                  
                  {/* Main call window */}
                  <div className="relative w-80 sm:w-96 bg-surface-raised/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                    {/* Main speaker */}
                    <div className="relative aspect-video bg-gradient-to-br from-emerald-900 to-teal-900 flex items-center justify-center">
                      {/* Avatar placeholder */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">JK</span>
                      </div>
                      {/* Name tag */}
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-white text-sm font-medium">Jordan Kim</span>
                        <FaCrown className="text-yellow-400 text-xs" />
                      </div>
                      {/* XP indicator */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.2 }}
                        className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-brand-primary/90 rounded-full"
                      >
                        <FaBolt className="text-white text-[10px]" />
                        <span className="text-white text-xs font-bold">+25 XP/min</span>
                      </motion.div>
                    </div>

                    {/* Participant thumbnails */}
                    <div className="p-3 grid grid-cols-3 gap-2">
                      {[
                        { name: 'Alex', color: 'from-purple-400 to-pink-500', active: true },
                        { name: 'Sam', color: 'from-cyan-400 to-blue-500', active: true },
                        { name: 'You', color: 'from-orange-400 to-red-500', active: true, highlight: true },
                      ].map((participant, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className={`relative aspect-video rounded-xl overflow-hidden ${
                            participant.highlight ? 'ring-2 ring-brand-primary' : ''
                          }`}
                        >
                          <div className={`w-full h-full bg-gradient-to-br ${participant.color} flex items-center justify-center`}>
                            <span className="text-white text-xs font-bold">{participant.name[0]}</span>
                          </div>
                          <div className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white">
                            {participant.name}
                          </div>
                          {participant.active && (
                            <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-green-500" />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Controls bar */}
                    <div className="p-3 border-t border-white/5 flex items-center justify-center gap-3">
                      {[
                        { icon: FaMicrophone, active: true },
                        { icon: FaVideo, active: true },
                        { icon: FaDesktop, active: false },
                      ].map((control, i) => (
                        <button
                          key={i}
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                            control.active 
                              ? 'bg-surface-glass text-white hover:bg-white/10' 
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          <control.icon className="text-sm" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Floating stats card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 }}
                    className="absolute -right-4 top-8 bg-surface-raised/95 backdrop-blur-xl rounded-xl border border-emerald-500/30 p-3 shadow-xl"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <FaUsers className="text-emerald-400 text-xs" />
                      </div>
                      <div>
                        <div className="text-white text-xs font-semibold">Squad Focus</div>
                        <div className="text-emerald-400 text-[10px]">2.5x XP Boost Active</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SquadRoomsSection;
