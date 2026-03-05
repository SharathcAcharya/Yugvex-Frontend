import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import ProductScene from './hero/ProductScene';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const sceneY = useTransform(scrollY, [0, 800], [0, 100]);
  const textY = useTransform(scrollY, [0, 600], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-surface-base">
      {/* === BACKGROUND LAYERS === */}
      
      {/* Layer 1: Deep Gradient */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-surface-raised via-[#0f0f1a] to-surface-base"
      />
      
      {/* Layer 2: Radial Glow Center - Purple */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.25),transparent)]" />
      
      {/* Layer 3: Side Glows - Cyan & Pink from logo */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_0%_0%,rgba(34,211,238,0.15),transparent_50%)]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_100%,rgba(232,121,249,0.12),transparent_50%)]"
      />

      {/* Layer 4: Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* Layer 5: Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              y: [null, '-20%'],
            }}
            transition={{ 
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
            className="absolute w-1 h-1 bg-brand-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 40}%`,
            }}
          />
        ))}
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-32">
            
            {/* LEFT COLUMN: Text Content */}
            <motion.div 
              style={{ y: textY, opacity }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-surface-glass border border-surface-glass-border mb-8"
              >
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-sm text-text-secondary">Now with AI-Powered Coaching</span>
              </motion.div> */}

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8"
              >
                <span className="block">TURN GOALS</span>
                <span className="block">INTO GAMES</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                  YOU CAN WIN
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                Yugvex transforms your daily challenges into competitive, social experiences powered by 
                <span className="text-white"> progress tracking</span>, 
                <span className="text-white"> rewards</span>, and 
                <span className="text-brand-primary"> AI coaching</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                {/* Primary CTA */}
                <a
                  href="/signup"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-surface-base bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:-translate-y-0.5"
                >
                  <span className="relative z-10">Start Playing</span>
                  <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Start Playing <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>

                {/* Secondary CTA */}
                <a
                  href="#features"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <FaPlay className="text-sm text-brand-primary" />
                  <span>Watch Demo</span>
                </a>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
              >
                {/* Avatar Stack */}
                <div className="flex -space-x-3">
                  {[
                    'from-cyan-400 to-blue-500',
                    'from-purple-400 to-pink-500', 
                    'from-green-400 to-emerald-500',
                    'from-orange-400 to-red-500',
                  ].map((gradient, i) => (
                    <div 
                      key={i} 
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} border-2 border-surface-base`}
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-surface-raised border-2 border-surface-base flex items-center justify-center text-xs font-bold text-gray-200">
                    +2K
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="text-white font-semibold">2,847 players</span> leveling up this week
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Product Scene */}
            <motion.div 
              style={{ y: sceneY }}
              className="relative order-1 lg:order-2"
            >
              <ProductScene />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-base to-transparent pointer-events-none z-20" />
    </section>
  );
};

export default Hero;
