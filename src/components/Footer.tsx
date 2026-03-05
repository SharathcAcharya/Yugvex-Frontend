import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaGamepad } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-surface-base pt-0 border-t border-surface-glass-border">
      
      {/* Massive CTA Section */}
      <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
         
         <div className="container mx-auto px-4 py-24 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-xl">
                Ready to Start Your Adventure?
            </h2>
            <button className="bg-surface-base text-brand-primary hover:text-white hover:bg-surface-raised font-bold text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-[0_0_40px_-5px_var(--color-brand-primary)] transition-all transform hover:scale-105 border border-brand-primary/20">
                Create Free Account
            </button>
         </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-text-secondary">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 font-bold text-2xl text-text-primary mb-6 p-8 uppercase tracking-widest">
                <FaGamepad className="text-3xl text-brand-primary" />
                <span>Yugvex</span>
            </div>
            <div className="flex space-x-6 text-xl">
               <FaTwitter className="hover:text-brand-primary cursor-pointer transition-colors" />
               <FaInstagram className="hover:text-brand-primary cursor-pointer transition-colors" />
               <FaFacebook className="hover:text-brand-primary cursor-pointer transition-colors" />
               <FaYoutube className="hover:text-brand-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
             <h4 className="text-brand-primary text-sm font-bold mb-4 uppercase tracking-wider">Product</h4>
             <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nitro</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-brand-primary text-sm font-bold mb-4 uppercase tracking-wider">Resources</h4>
             <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-brand-primary text-sm font-bold mb-4 uppercase tracking-wider">Policies</h4>
             <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
             </ul>
          </div>

        </div>

        <div className="border-t border-surface-glass-border mt-12 pt-8 flex justify-between items-center text-sm">
           <p>&copy; 2026 Yugvex Inc.</p>
           <button className="bg-brand-primary text-surface-base px-4 py-2 rounded-full hover:bg-brand-primary-dark transition-colors font-medium text-xs font-bold">
              Open App
           </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
