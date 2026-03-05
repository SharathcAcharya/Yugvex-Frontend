/**
 * Firebase Authentication Service
 * ─────────────────────────────────
 * This module is the ONLY place in this frontend that calls Firebase Auth APIs.
 * It acts as a thin adapter so that pages never import firebase directly.
 */

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  type UserCredential,
} from 'firebase/auth';
import { auth } from '../lib/firebase';

const googleProvider = new GoogleAuthProvider();

const APP_URL     = import.meta.env.VITE_APP_URL     ?? 'https://appyugvex.vercel.app';
const LANDING_URL = import.meta.env.VITE_LANDING_URL ?? 'https://yugvex.vercel.app';

export interface SignupData {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
}

/**
 * Sign in or register via Google OAuth popup.
 * Firebase handles both new and returning users automatically.
 */
export async function signInWithGoogle(): Promise<UserCredential> {
  return signInWithPopup(auth, googleProvider);
}

/**
 * Login an existing user.
 */
export async function loginWithEmail(
  email: string,
  password: string
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Register a new user.
 * Sets the Firebase display-name to "name | @username" after account creation.
 */
export async function signupWithEmail(data: SignupData): Promise<UserCredential> {
  const credential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  await updateProfile(credential.user, {
    displayName: `${data.name} | @${data.username}`,
  });

  return credential;
}

/**
 * Sign the current user out and return to the landing login page.
 * This mirrors the NEXT_PUBLIC_AUTH_URL the software app uses for its proxy.
 */
export async function signOutUser(): Promise<void> {
  await signOut(auth);
  window.location.href = `${LANDING_URL}/login`;
}

/**
 * Redirect into the Yugvex SaaS App after successful authentication.
 *
 * WHY WE PASS THE TOKEN:
 * Firebase Auth state is stored in IndexedDB, which is domain-scoped.
 * appyugvex.vercel.app cannot read the session created on yugvex.vercel.app.
 * We get a short-lived Firebase ID token (1 hr) and hand it to the software
 * app's /auth/callback route. The app's Firebase Admin SDK verifies it,
 * creates a server-side session, then redirects the user to /dashboard.
 *
 * This matches the proxy.ts pattern in the software app which expects a
 * verified Firebase ID token to establish the authenticated session.
 */
export async function redirectToApp(): Promise<void> {
  const user = auth.currentUser;

  if (!user) {
    // No active Firebase session — send back to login
    window.location.href = `${LANDING_URL}/login`;
    return;
  }

  // forceRefresh=true ensures fresh token, not a cached one
  const idToken = await user.getIdToken(true);

  // Hand the token to the software app's auth callback endpoint
  window.location.href = `${APP_URL}/auth/callback?token=${encodeURIComponent(idToken)}`;
}
