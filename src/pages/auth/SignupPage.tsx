import { useState } from 'react';
import YugvexLogo from '../../components/brand/Logo';
import { signupWithEmail, signInWithGoogle, redirectToApp } from '../../api/firebaseAuth';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    dob: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignup = async () => {
    setGoogleLoading(true);
    setError('');
    try {
      await signInWithGoogle();
      await redirectToApp();
    } catch (err: any) {
      const msg = err.code === 'auth/popup-closed-by-user'
        ? 'Sign-in popup was closed. Please try again.'
        : err.message ?? 'Google sign-in failed.';
      setError(msg);
      setGoogleLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signupWithEmail(formData);
      // Firebase account created + ID token handed off to software app
      await redirectToApp();
    } catch (err: any) {
      const msg = err.code === 'auth/email-already-in-use'
        ? 'An account with this email already exists.'
        : err.code === 'auth/weak-password'
        ? 'Password must be at least 6 characters.'
        : err.message ?? 'Something went wrong. Please try again.';
      setError(msg);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-base p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-md bg-surface-raised border border-surface-glass-border rounded-3xl p-8 shadow-2xl relative z-10 backdrop-blur-xl animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
             <YugvexLogo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Join the Guild</h1>
          <p className="text-text-secondary">Begin your journey in the productivity MMO.</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">Full Name</label>
              <input 
                name="name"
                type="text" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-surface-base border border-surface-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                placeholder="Alex Chen"
                required
              />
            </div>
             <div>
              <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">Username</label>
              <input 
                name="username"
                type="text" 
                value={formData.username}
                onChange={handleChange}
                className="w-full bg-surface-base border border-surface-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                placeholder="RogueOne"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">Email</label>
            <input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-surface-base border border-surface-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              placeholder="hero@yugvex.app"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">Date of Birth</label>
            <input 
              name="dob"
              type="date" 
              value={formData.dob}
              onChange={handleChange}
              className="w-full bg-surface-base border border-surface-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">Password</label>
            <input 
              name="password"
              type="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-surface-base border border-surface-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full bg-brand-primary hover:bg-brand-primary-light text-surface-base font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-surface-base" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Character...
              </span>
            ) : 'Start Your Adventure'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-surface-glass-border" />
          <span className="px-3 text-xs text-text-tertiary uppercase tracking-widest">or</span>
          <div className="flex-1 h-px bg-surface-glass-border" />
        </div>

        <GoogleAuthButton onClick={handleGoogleSignup} isLoading={googleLoading} label="Sign up with Google" />

        <p className="text-center mt-6 text-sm text-text-secondary">
          Already have an account? <a href="/login" className="text-brand-primary hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
