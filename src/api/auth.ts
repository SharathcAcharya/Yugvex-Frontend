// Simulation of backend API calls
// In production, this would use fetch/axios to hit the real backend

const APP_URL = import.meta.env.VITE_APP_URL ?? 'https://app.yugvex.vercel.app';

export interface User {
  id: string;
  email: string;
  username: string;
  name: string;
}

export const authService = {
  login: async (email: string, password: string): Promise<{ user: User }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate basic validation
        if (email && password.length >= 6) {
          console.log(`[Auth Mock] Login successful for ${email}. Cookie 'YugvexAuth' would be set by server.`);
          resolve({
            user: {
              id: 'user_' + Math.floor(Math.random() * 10000),
              email,
              username: email.split('@')[0],
              name: 'Hero User'
            }
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1500); // 1.5s delay for realism
    });
  },

  signup: async (data: any): Promise<{ user: User }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email && data.password && data.username) {
           console.log(`[Auth Mock] Signup successful for ${data.username}. Cookie 'YugvexAuth' would be set by server.`);
           resolve({
            user: {
              id: 'user_' + Math.floor(Math.random() * 10000),
              email: data.email,
              username: data.username,
              name: data.name
            }
          });
        } else {
          reject(new Error('Please fill in all required fields'));
        }
      }, 2000);
    });
  },

  // Helper to handle the redirect
  redirectToApp: () => {
    // In a real cookie-based flow, we just redirect. The browser sends the cookie.
    // If we were using token-in-url (less secure), we'd append it here.
    // We strictly follow the architecture: Cookie set -> Redirect.
    window.location.href = `${APP_URL}/dashboard`;
  }
};
