import FeatureShowcase from './features/FeatureShowcase';

const FeaturesSection = () => {
  const features = [
    {
      badge: 'AI-Powered',
      headline: ['YOUR PERSONAL', 'AI COACH'],
      description: 'Get personalized recommendations, task prioritization, and motivational nudges from your AI companion. It learns your patterns and helps you optimize for peak productivity.',
      visual: 'ai-coach' as const,
      accent: 'violet' as const,
      position: 'left' as const,
    },
    {
      badge: 'Compete',
      headline: ['CLIMB THE', 'LEADERBOARD'],
      description: 'Challenge your friends, join squads, and compete for the top spot. Weekly competitions keep you motivated while celebrating everyone\'s progress.',
      visual: 'leaderboard' as const,
      accent: 'cyan' as const,
      position: 'right' as const,
    },
    {
      badge: 'Unlock',
      headline: ['EARN EPIC', 'ACHIEVEMENTS'],
      description: 'Complete challenges to unlock rare badges, titles, and rewards. Every milestone is celebrated, making your progress feel meaningful and fun.',
      visual: 'achievements' as const,
      accent: 'green' as const,
      position: 'left' as const,
    },
  ];

  return (
    <div className="bg-surface-base">
      {features.map((feature, index) => (
        <FeatureShowcase
          key={index}
          feature={{
            badge: feature.badge,
            headline: feature.headline,
            description: feature.description,
            visual: feature.visual,
          }}
          visualPosition={feature.position}
          accentColor={feature.accent}
          gradientDirection={feature.position === 'left' ? 'to-br' : 'to-bl'}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
