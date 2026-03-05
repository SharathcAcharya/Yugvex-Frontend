import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import YugvexLogo from './brand/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { 
      label: 'Product', 
      href: '#',
      dropdown: [
        { label: 'Overview', href: '/product' },
        { label: 'AI Coach', href: '/features' },
        { label: 'Challenges', href: '/features' },
        { label: 'Leaderboards', href: '/features' },
      ]
    },
    { label: 'Community', href: '#community' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Visual Layer - ONLY background/blur changes on scroll, NO structural changes */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          scrolled 
            ? 'bg-surface-base/80 backdrop-blur-xl border-b border-surface-glass-border' 
            : 'bg-transparent'
        }`}
      />
      
      {/* Structural Layer - Height LOCKED regardless of scroll state */}
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="flex items-center h-20">
          
          {/* Logo - Flush Left Edge - Negative margin counteracts container padding */}
          <a 
            href="/" 
            className="flex items-center group -ml-30 lg:-ml-60 mr-auto"
          >
            <YugvexLogo variant="full" size="xl" animated={false} />
          </a>

          {/* Center Navigation - Absolutely positioned to true center */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <div 
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                  {link.dropdown && <FaChevronDown className="text-[10px] opacity-50" />}
                </a>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-surface-raised/95 backdrop-blur-xl border border-surface-glass-border rounded-xl p-2 min-w-[180px] shadow-xl">
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2.5 text-sm font-bold text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side: Auth */}
          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="/login" 
              className="hidden sm:block text-sm font-bold text-text-secondary hover:text-white transition-colors"
            >
              Log In
            </a>
            <a 
              href="/signup"
              className="relative group inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
