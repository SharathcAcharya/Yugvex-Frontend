import { useState, useEffect } from 'react';
import YugvexLogo from '../../components/brand/Logo';
import { loginWithEmail, signInWithGoogle, redirectToApp } from '../../api/firebaseAuth';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [googleLoading, setGoogleLoading] = useState(false);

  // If Firebase resolves and user is already authenticated, go straight to app
  useEffect(() => {
    if (!loading && user) {
      redirectToApp();
    }
  }, [user, loading]);

  // Show spinner while Firebase resolves auth state
  if (loading || user) {
    return (
      <div className="min-h-screen bg-surface-base flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleGoogleLogin = async () => {
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await loginWithEmail(email, password);
      // Firebase ID token is fetched and passed to the app's /auth/callback
      await redirectToApp();
    } catch (err: any) {
      const msg = err.code === 'auth/invalid-credential'
        ? 'Email or password is incorrect.'
        : err.message ?? 'Something went wrong.';
      setError(msg);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-base p-4 relative overflow-hidden">
        {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md bg-surface-raised border border-surface-glass-border rounded-3xl p-8 shadow-2xl relative z-10 backdrop-blur-xl animate-fade-in-up">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
             <YugvexLogo size="lg" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-text-secondary">Ready to continue your streak?</p>
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-base border border-surface-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              placeholder="hero@yugvex.app"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-1 uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-base border border-surface-glass-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full bg-brand-secondary hover:bg-brand-secondary-light text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging In...
              </span>
            ) : 'Log In'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-surface-glass-border" />
          <span className="px-3 text-xs text-text-tertiary uppercase tracking-widest">or</span>
          <div className="flex-1 h-px bg-surface-glass-border" />
        </div>

        <GoogleAuthButton onClick={handleGoogleLogin} isLoading={googleLoading} label="Continue with Google" />

        <p className="text-center mt-6 text-sm text-text-secondary">
          New to Yugvex? <a href="/signup" className="text-brand-primary hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
