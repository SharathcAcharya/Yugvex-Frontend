import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHashtag, FaVolumeUp, FaClock, FaChevronDown } from 'react-icons/fa';

/**
 * SECTION 2: "DROP IN ANYTIME"
 * 
 * Discord Reference: "Hop in when you're free, no need to call"
 * - Purple/gray rounded container
 * - Server sidebar + video grid UI
 * - Visual LEFT, Text RIGHT
 * 
 * Yugvex Adaptation:
 * - Quest channel system
 * - Active challenges you can join
 * - Async participation without scheduling
 */

const DropInSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Floating 3D-like decorative element */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-[8%] w-20 h-20"
      >
        <div className="w-full h-full bg-gradient-to-br from-brand-secondary/40 to-brand-accent/30 rounded-xl transform rotate-12 shadow-lg" />
        <div className="absolute inset-2 bg-gradient-to-br from-brand-secondary/60 to-brand-accent/40 rounded-lg transform -rotate-6" />
      </motion.div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          {/* Main Container with Purple/Gray Gradient */}
          <div className="relative bg-gradient-to-br from-slate-700/90 via-slate-800/95 to-indigo-900/90 border border-slate-600/30">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(139,92,246,0.1),transparent_60%)]" />
            
            {/* Content Grid - Visual LEFT, Text RIGHT */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              
              {/* LEFT: Quest Hub Visual */}
              <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative"
                >
                  {/* Glow behind */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/20 to-indigo-500/10 rounded-3xl blur-2xl" />
                  
                  {/* Main UI Container */}
                  <div className="relative flex gap-3">
                    {/* Sidebar - Quest Channels */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 }}
                      className="w-52 bg-surface-base rounded-xl border border-surface-glass-border shadow-xl overflow-hidden"
                    >
                      {/* Server Header */}
                      <div className="p-3 border-b border-surface-glass-border flex items-center justify-between">
                        <span className="text-white font-semibold text-sm">Quest Hub</span>
                        <FaChevronDown className="text-gray-300 text-xs" />
                      </div>

                      {/* Channels */}
                      <div className="p-2 space-y-1">
                        <div className="text-gray-300 text-[10px] uppercase tracking-wider px-2 py-1">Active Quests</div>
                        
                        {[
                          { name: 'daily-focus', icon: FaHashtag, active: false },
                          { name: 'weekly-sprint', icon: FaHashtag, active: false },
                        ].map((channel, i) => (
                          <div key={i} className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${channel.active ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                            <channel.icon className="text-gray-300 text-xs" />
                            <span className="text-gray-200 text-xs">{channel.name}</span>
                          </div>
                        ))}

                        <div className="text-gray-300 text-[10px] uppercase tracking-wider px-2 py-1 mt-3">Live Challenges</div>
                        
                        <motion.div
                          className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-brand-secondary/20 border border-brand-secondary/30"
                        >
                          <FaVolumeUp className="text-brand-secondary text-xs" />
                          <span className="text-white text-xs font-medium">focus-room</span>
                        </motion.div>

                        {/* Participants */}
                        <div className="pl-6 space-y-1.5 mt-1">
                          {[
                            { name: 'Alex', status: 'focusing', avatar: 'from-purple-400 to-pink-500' },
                            { name: 'Jordan', status: 'on break', avatar: 'from-green-400 to-emerald-500' },
                            { name: 'Sam', status: 'focusing', avatar: 'from-orange-400 to-red-500' },
                          ].map((user, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.7 + i * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${user.avatar}`} />
                              <span className="text-gray-200 text-xs">{user.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Challenge Cards Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col gap-3"
                    >
                      {/* Active Challenge Badge */}
                      <div className="bg-brand-secondary/90 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 self-start shadow-lg">
                        <FaVolumeUp className="text-white text-xs" />
                        <span className="text-white text-sm font-medium">focus-room</span>
                      </div>

                      {/* Challenge Cards */}
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { title: 'Deep Work', color: 'bg-violet-500', time: '2h left', xp: '+200', active: true },
                          { title: 'Quick Sprint', color: 'bg-pink-500', time: '30m left', xp: '+50', active: false },
                          { title: 'Reading', color: 'bg-emerald-500', time: 'Anytime', xp: '+75', active: false },
                          { title: 'Creative', color: 'bg-cyan-500', time: 'Anytime', xp: '+100', active: false },
                        ].map((challenge, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8 + i * 0.1 }}
                            className={`relative w-28 h-20 rounded-xl ${challenge.color} p-3 flex flex-col justify-between overflow-hidden ${
                              challenge.active ? 'ring-2 ring-white shadow-lg' : ''
                            }`}
                          >
                            {challenge.active && (
                              <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-red-500 rounded text-[8px] text-white font-bold">
                                LIVE
                              </div>
                            )}
                            <div className="text-white text-xs font-bold">{challenge.title}</div>
                            <div className="flex items-center justify-between">
                              <span className="text-white/70 text-[9px]">{challenge.time}</span>
                              <span className="text-white text-[9px] font-semibold">{challenge.xp}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT: Text Content */}
              <div className="text-center lg:text-left order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6"
                >
                  <FaClock className="text-violet-300 text-xs" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">Async-First</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6"
                >
                  <span className="block">DROP IN</span>
                  <span className="block">ANYTIME,</span>
                  <span className="block text-violet-300">NO SCHEDULE</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  See active challenges and join whenever you're ready. No need to coordinate 
                  times or send invites. Your squad is always there, and the quests are always running.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DropInSection;
