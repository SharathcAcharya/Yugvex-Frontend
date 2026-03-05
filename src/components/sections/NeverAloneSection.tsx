import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaHeart, FaComment, FaTrophy, FaFire, FaStar } from 'react-icons/fa';

/**
 * SECTION 3: "NEVER GRIND ALONE"
 * 
 * Discord Reference: "Always have something to do together"
 * - Green-to-purple split gradient (dramatic)
 * - Phone mockup with multi-person video grid
 * - Visual LEFT, Text RIGHT
 * - Character illustrations top-right
 * 
 * Yugvex Adaptation:
 * - Social activity feed on phone
 * - Squad celebrations and shared achievements
 * - Community engagement visualization
 */

const NeverAloneSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Character-like decorative elements (abstract shapes instead of mascots) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 right-[15%] hidden lg:block"
      >
        {/* Abstract "person" shapes */}
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg" />
            <div className="w-20 h-12 -mt-2 mx-auto rounded-t-3xl bg-gradient-to-br from-pink-300 to-rose-400" />
          </div>
          <div className="relative mt-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 shadow-lg" />
            <div className="w-18 h-10 -mt-1 mx-auto rounded-t-3xl bg-gradient-to-br from-violet-300 to-purple-400" />
          </div>
        </div>
      </motion.div>

      {/* Bottom-left decorative blob */}
      <motion.div
        animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[5%] hidden lg:block"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/60 to-emerald-400/40 blur-sm" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-300 to-emerald-300" />
      </motion.div>

      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-[3rem] overflow-hidden"
        >
          {/* Main Container with Green-to-Purple Split Gradient */}
          <div className="relative bg-gradient-to-r from-emerald-600/90 via-teal-700/90 to-indigo-900/95 border border-emerald-500/20">
            {/* Dramatic glow overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(16,185,129,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,rgba(99,102,241,0.2),transparent_50%)]" />
            
            {/* Content Grid - Visual LEFT, Text RIGHT */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
              
              {/* LEFT: Phone Mockup with Social Feed */}
              <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 40, rotateY: 5 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow behind phone */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-purple-400/20 rounded-[3rem] blur-2xl" />
                  
                  {/* Phone Frame */}
                  <div className="relative w-64 sm:w-72 bg-gradient-to-b from-pink-100 to-purple-100 rounded-[2.5rem] border-4 border-white/20 shadow-2xl overflow-hidden">
                    {/* Phone Notch */}
                    <div className="h-8 bg-surface-base flex items-center justify-center relative">
                      <div className="w-20 h-5 bg-black rounded-full" />
                    </div>

                    {/* App Header */}
                    <div className="bg-surface-base px-4 py-3 flex items-center justify-between border-b border-surface-glass-border">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-sm">The Squad</span>
                        <FaChevronDown className="text-text-tertiary text-xs" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-surface-glass flex items-center justify-center">
                          <FaVolumeUp className="text-white text-xs" />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-surface-glass flex items-center justify-center">
                          <FaUsers className="text-white text-xs" />
                        </div>
                      </div>
                    </div>

                    {/* Activity Grid */}
                    <div className="p-3 space-y-3 bg-gradient-to-b from-surface-base to-surface-raised">
                      {/* Video tiles grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { name: 'Alex', gradient: 'from-purple-400 to-pink-500', hasVideo: true },
                          { name: 'Jordan', gradient: 'from-cyan-400 to-blue-500', hasVideo: true },
                          { name: 'You', gradient: 'from-orange-400 to-red-500', hasVideo: false, highlight: true },
                          { name: 'Sam', gradient: 'from-green-400 to-emerald-500', hasVideo: true },
                        ].map((user, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className={`relative aspect-square rounded-xl overflow-hidden ${
                              user.highlight ? 'ring-2 ring-brand-primary' : ''
                            }`}
                          >
                            <div className={`w-full h-full bg-gradient-to-br ${user.gradient} flex items-center justify-center`}>
                              {user.hasVideo ? (
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                  <span className="text-white font-bold">{user.name[0]}</span>
                                </div>
                              ) : (
                                <FaStar className="text-white/80 text-2xl" />
                              )}
                            </div>
                            <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between">
                              <span className="px-1.5 py-0.5 bg-black/60 rounded text-[9px] text-white">{user.name}</span>
                              {user.hasVideo && (
                                <FaHeart className="text-pink-400 text-xs" />
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Shared activity */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 }}
                        className="bg-surface-glass rounded-xl p-3 border border-surface-glass-border"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <FaFire className="text-orange-400 text-xs" />
                          <span className="text-white text-xs font-semibold">Squad Milestone!</span>
                        </div>
                        <p className="text-gray-200 text-[10px]">Your squad just hit 10,000 combined XP this week! 🎉</p>
                      </motion.div>
                    </div>

                    {/* Bottom controls */}
                    <div className="p-3 bg-surface-base border-t border-surface-glass-border flex items-center justify-around">
                      {[FaVideo, FaMicrophone, FaComment, FaDesktop, FaPhoneSlash].map((Icon, i) => (
                        <div 
                          key={i} 
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            i === 4 ? 'bg-red-500' : 'bg-surface-glass'
                          }`}
                        >
                          <Icon className={`text-sm ${i === 4 ? 'text-white' : 'text-white'}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating celebration card */}
                  <motion.div
                    initial={{ opacity: 0, x: 40, rotate: 5 }}
                    animate={isInView ? { opacity: 1, x: 0, rotate: 3 } : {}}
                    transition={{ delay: 1.2 }}
                    className="absolute -right-8 top-16 bg-white rounded-xl p-3 shadow-xl max-w-[140px]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                        <FaTrophy className="text-white text-xs" />
                      </div>
                      <div className="text-surface-base text-[10px] font-bold">Squad Win!</div>
                    </div>
                    <p className="text-gray-600 text-[9px]">Top 10% this week</p>
                  </motion.div>

                  {/* Floating share button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.1 }}
                    className="absolute -left-4 bottom-24 bg-white rounded-xl px-3 py-2 shadow-xl flex items-center gap-2"
                  >
                    <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center">
                      <FaPlay className="text-white text-[8px]" />
                    </div>
                    <span className="text-surface-base text-xs font-medium">Share screen</span>
                  </motion.div>
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
                  <FaHeart className="text-pink-300 text-xs" />
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">Social</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6"
                >
                  <span className="block">NEVER</span>
                  <span className="block">GRIND</span>
                  <span className="block text-emerald-300">ALONE</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-emerald-100/80 leading-relaxed max-w-lg mx-auto lg:mx-0"
                >
                  Watch together, work together, celebrate together. Share screens, 
                  react to wins, and turn solo tasks into squad activities. 
                  Productivity is better with friends.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Need these imports for the phone mockup
const FaChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
    <path d="M7 10l5 5 5-5H7z"/>
  </svg>
);
const FaVideo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 576 512" fill="currentColor" width="1em" height="1em">
    <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.6c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"/>
  </svg>
);
const FaMicrophone = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor" width="1em" height="1em">
    <path d="M192 0C139 0 96 43 96 96v160c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-33.6c85.8-11.7 152-85.3 152-174.4v-40c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128S64 326.7 64 256v-40z"/>
  </svg>
);
const FaDesktop = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 576 512" fill="currentColor" width="1em" height="1em">
    <path d="M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h176l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-69.3L336 416h176c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm448 64v224H64V64h448z"/>
  </svg>
);
const FaPhoneSlash = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 640 512" fill="currentColor" width="1em" height="1em">
    <path d="M228.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C76.1 30.2 64 46 64 64c0 107.4 37.8 206 100.8 283.1L38.8 405.7c-12.5 10-13.8 28.8-3 40.6l32 36c9.5 10.7 25.9 12 36.8 3l488-392c12.5-10 13.8-28.8 3-40.6l-32-36c-9.5-10.7-25.9-12-36.8-3L405.5 113.9C341.2 63.2 263.7 32 180.8 32h-1.3l49.4 -7.4zM576 64c0-18-12.1-33.8-29.5-38.8l-88-24c-19.4-5.3-39.7 4.6-47.4 23.2l-40 96c-6.8 16.3 .9 35 16.1 43.8l53.1 30.7c11.5 6.6 16.9 20.1 12.7 32.5c-22.6 67.5-70.8 123-131.6 158.6l92.6 74c64.4-51.2 115.4-117.2 147.5-193.2 20.7-49.1 20.7-104.8 0-153.9l-40 96z"/>
  </svg>
);
const FaVolumeUp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 640 512" fill="currentColor" width="1em" height="1em">
    <path d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C googl.3 281.3 400 269.4 400 256s8.3-25.3 17.7-37.3c10.3-8.4 25.4-6.8 33.8 3.5s6.8 25.4-3.5 33.8zM301.1 34.8C312.6 40 320 51.4 320 64v384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
  </svg>
);
const FaPlay = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 384 512" fill="currentColor" width="1em" height="1em">
    <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.8 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
  </svg>
);

export default NeverAloneSection;
