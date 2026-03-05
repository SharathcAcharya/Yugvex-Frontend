import MobileSidebar from '../../components/MobileSidebar';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import FeaturesSection from '../../components/FeaturesSection';
import MarqueeBand, { OutlineMarqueeBand } from '../../components/MarqueeBand';
import SquadRoomsSection from '../../components/sections/SquadRoomsSection';
import DropInSection from '../../components/sections/DropInSection';
import NeverAloneSection from '../../components/sections/NeverAloneSection';
import Features from '../../components/Features';
import Testimonials from '../../components/Testimonials';
import SignatureFooter from '../../components/SignatureFooter';

const LandingPage = () => {
    return (
        <div className="text-text-primary min-h-screen font-sans selection:bg-brand-primary selection:text-black">
            <MobileSidebar />
            <Navbar />
            <Hero />
            
            {/* Primary Marquee - After Hero */}
            <MarqueeBand variant="primary" duration={35} />
            
            <FeaturesSection />
            
            {/* Outline Marquee - Section Separator */}
            <OutlineMarqueeBand />
            
            <SquadRoomsSection />
            <DropInSection />
            <NeverAloneSection />
            
            {/* Secondary Marquee - Before Bento */}
            <MarqueeBand variant="secondary" direction="right" duration={40} />
            
            <Features />
            <Testimonials />
            <SignatureFooter />
        </div>
    );
};

export default LandingPage;
