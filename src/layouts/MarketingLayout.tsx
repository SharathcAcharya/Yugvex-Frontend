import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import MobileSidebar from '../components/MobileSidebar';
import SignatureFooter from '../components/SignatureFooter';

interface MarketingLayoutProps {
  children: ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="text-text-primary min-h-screen font-sans selection:bg-brand-primary selection:text-black">
      <MobileSidebar />
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <SignatureFooter />
    </div>
  );
};

export default MarketingLayout;
