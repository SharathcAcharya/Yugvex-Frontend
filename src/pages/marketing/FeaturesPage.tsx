import FeaturesSection from '../../components/FeaturesSection';
import Features from '../../components/Features';

const FeaturesPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
          Everything You Need to <br/>
          <span className="text-brand-gradient">Win at Life</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          From AI coaching to competitive leaderboards, explore the tools that turn your daily grind into an epic adventure.
        </p>
      </div>
      
      {/* Reuse existing feature components */}
      <FeaturesSection />
      <Features />
    </div>
  );
};

export default FeaturesPage;
