import type { MouseEvent } from 'react';
import { FaChartLine, FaUsers, FaRobot, FaTrophy } from 'react-icons/fa';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const features = [
  {
    icon: <FaChartLine className="text-4xl text-brand-primary" />,
    title: "Challenge System",
    description: "Turn habits into XP. Daily quests, weekly raids against bad habits, and streak bonuses.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <FaUsers className="text-4xl text-brand-accent" />,
    title: "Social Economy",
    description: "Earn Gems by helping others. Spend them in the shop or pool them for Squad rewards.",
    colSpan: "md:col-span-1"
  },
  {
    icon: <FaRobot className="text-4xl text-brand-secondary" />,
    title: "AI Coach",
    description: "Your personal 24/7 accountability partner. Get real-time feedback on your progress. The AI analyzes your daily logs to suggest quest adjustments.",
    colSpan: "md:col-span-2" 
  },
  {
    icon: <FaTrophy className="text-4xl text-yellow-400" />,
    title: "Leaderboards",
    description: "Compete with friends or globally. Rise through the ranks from Novice to Grandmaster. Monthly seasons with exclusive cosmetic rewards.",
    colSpan: "md:col-span-2"
  }
];

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-surface-glass-border bg-surface-glass overflow-hidden rounded-3xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(0, 212, 255, 0.15),
            transparent 80%
          )`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

const Features = () => {
  return (
    <section id="features" className="py-24 bg-surface-base relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-6"
          >
            Choose Your Class & Build
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Everything you need to turn your life into the ultimate RPG.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <SpotlightCard key={index} className={`p-8 ${feature.colSpan}`}>
              <div className="flex flex-col h-full">
                <div className="mb-6 p-4 w-16 h-16 flex items-center justify-center bg-surface-raised rounded-2xl border border-surface-glass-border shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
