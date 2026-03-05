import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaBars, FaTimes, FaSignInAlt, FaRocket } from 'react-icons/fa';
import { YugvexLogoFull } from './brand/Logo';

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const sidebarVariants: Variants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants: Variants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Challenges', href: '#features' }, // Mapped to features for now
    { name: 'Community', href: '#community' },
  ];

  return (
    <>
      {/* Sticky Trigger - Top Left */}
      <motion.button
        onClick={toggleOpen}
        className="fixed top-6 left-4 z-[60] p-3 bg-surface-raised/80 backdrop-blur-md border border-surface-glass-border rounded-full text-text-primary shadow-lg md:hidden hover:bg-surface-raised transition-colors"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-surface-base/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar Container */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-surface-base/95 backdrop-blur-xl border-r border-surface-glass-border z-50 md:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-8 border-b border-surface-glass-border flex items-center">
                <YugvexLogoFull size="sm" animated={false} />
              </div>

              {/* Links */}
              <div className="flex-1 px-6 py-8 flex flex-col gap-6 overflow-y-auto">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    custom={i}
                    variants={menuItemVariants}
                    className="text-2xl font-bold text-text-secondary hover:text-brand-primary hover:translate-x-2 transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-surface-glass-border grid gap-4 bg-surface-raised/50">
                <motion.a
                   href="/login"
                   className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-surface-raised hover:bg-white/5 text-text-primary font-semibold transition-colors border border-surface-glass-border"
                   whileTap={{ scale: 0.98 }}
                >
                  <FaSignInAlt /> Login
                </motion.a>
                <motion.a
                   href="/signup"
                   className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-brand-primary hover:bg-brand-primary-dark text-black font-bold shadow-lg shadow-brand-primary/20 transition-all"
                   whileTap={{ scale: 0.98 }}
                >
                  <FaRocket /> Get Started
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSidebar;
