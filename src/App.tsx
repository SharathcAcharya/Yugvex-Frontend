import { Helmet } from 'react-helmet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/marketing/LandingPage';
import FeaturesPage from './pages/marketing/FeaturesPage';
import SignupPage from './pages/auth/SignupPage';
import LoginPage from './pages/auth/LoginPage';
import MarketingLayout from './layouts/MarketingLayout';
import { AuthProvider } from './context/AuthContext';

// Simple loading spinner
const PageLoader = () => (
  <div className="min-h-screen bg-surface-base flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Helmet>
        <title>Yugvex | Level Up Your Life</title>
        <meta name="description" content="The productivity platform that feels like an MMO. Join squads, defeat bosses, and track your real-life stats." />
        <meta name="theme-color" content="#00D4FF" />
      </Helmet>
      
      <Routes>
        {/* Marketing Layer (Public) */}
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/features" element={
          <MarketingLayout>
            <FeaturesPage />
          </MarketingLayout>
        } />

        <Route path="/product" element={
          <MarketingLayout>
            {/* Reusing FeaturesPage as placeholder for Product Overview for now */}
            <FeaturesPage />
          </MarketingLayout>
        } />

        <Route path="/pricing" element={
          <MarketingLayout>
             <div className="pt-32 text-center container mx-auto text-white">
                <h1 className="text-4xl font-bold mb-4">Pricing</h1>
                <p className="text-text-secondary">Choose your class.</p>
                {/* Placeholder content */}
                <div className="h-96 flex items-center justify-center border border-white/10 rounded-2xl mt-8 bg-surface-raised">
                   Pricing Table Coming Soon
                </div>
             </div>
          </MarketingLayout>
        } />
        
        <Route path="/community" element={
          <MarketingLayout>
             <div className="pt-32 text-center container mx-auto text-white">
                <h1 className="text-4xl font-bold mb-4">Community</h1>
                <p className="text-text-secondary">Join the guild.</p>
             </div>
          </MarketingLayout>
        } />

        {/* Auth Routes */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
