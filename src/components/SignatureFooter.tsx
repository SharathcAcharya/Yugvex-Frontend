import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaTwitter, 
  FaInstagram, 
  FaDiscord, 
  FaYoutube, 
  FaTiktok,
  FaChevronDown
} from 'react-icons/fa';
import { YugvexIcon } from './brand/Logo';

const SignatureFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const footerLinks = {
    Product: [
      { label: 'Overview', href: '/product' },
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Communty', href: '/community' },
      { label: 'Login', href: '/login' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Brand', href: '#' },
      { label: 'Newsroom', href: '#' },
    ],
    Resources: [
      { label: 'Support', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Creators', href: '#' },
      { label: 'Developers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    Policies: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Guidelines', href: '#' },
      { label: 'Licenses', href: '#' },
      { label: 'Acknowledgements', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Cookie Settings', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaDiscord, href: '#', label: 'Discord' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
  ];

  return (
    <footer 
      ref={ref}
      className="relative bg-gradient-to-b from-surface-raised via-brand-secondary/5 to-surface-base overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

      {/* === FUNCTIONAL AREA === */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          
          {/* Logo + Language + Social Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <YugvexIcon size="massive" animated={false} />
            </motion.div>

            {/* Language Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <label className="block text-white/50 text-xs uppercase tracking-wider mb-2">
                Language
              </label>
              <div className="relative inline-block">
                <select className="appearance-none bg-white/5 backdrop-blur border border-white/10 text-white px-4 py-3 pr-10 rounded-xl text-sm font-medium cursor-pointer hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="ja">日本語</option>
                </select>
                <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-xs pointer-events-none" />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block text-white/50 text-xs uppercase tracking-wider mb-3">
                Social
              </label>
              <div className="flex items-center gap-4">
                
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white hover:border-brand-primary/50 transition-all"
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </motion.div>
            <div>
              <br/>
              <br/>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div>
              © {new Date().getFullYear()} Yugvex, Inc. All rights reserved.
            </div>
          </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (categoryIndex + 1) }}
            >
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === BRAND IMPACT AREA === */}
      <div className="relative z-10 overflow-hidden">
        {/* Massive Brand Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative text-center select-none pointer-events-none"
        >
          {/* The massive text - intentionally oversized and cropped */}
          <div 
            className="font-black text-transparent bg-clip-text bg-gradient-to-b from-white/60 to-white/60 leading-none tracking-tighter select-none"
            style={{
              fontSize: 'clamp(80px, 20vw, 300px)',
              marginBottom: '-0.15em', // Crop bottom
            }}
          >
            YUGVEX
          </div>
        </motion.div>

        {/* Gradient fade at bottom - Reduced height and intensity to reveal text */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* === BOTTOM BAR === */}
      {/* <div className="bg-gradient-to-t via-white/10 border-white/60 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <div>
              © {new Date().getFullYear()} Yugvex, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default SignatureFooter;
