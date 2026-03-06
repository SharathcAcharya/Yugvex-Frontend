/**
 * Firebase Authentication Service
 * ---------------------------------
 * ARCHITECTURE:
 * The landing app (yugvex.vercel.app) is a pure authentication gateway.
 *
 * After login it redirects the user to the software app dashboard.
 * Firebase browserLocalPersistence is set on auth init (see lib/firebase.ts),
 * so the session is stored in the browser and survives the redirect.
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

const APP_URL     = import.meta.env.VITE_APP_URL     ?? 'https://app-yugvex.vercel.app';
const LANDING_URL = import.meta.env.VITE_LANDING_URL ?? 'https://yugvex.vercel.app';

export interface SignupData {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
}

/** Sign in via Google OAuth popup. */
export async function signInWithGoogle(): Promise<UserCredential> {
  return signInWithPopup(auth, googleProvider);
}

/** Login an existing user with email + password. */
export async function loginWithEmail(
  email: string,
  password: string
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Register a new user.
 * Sets the Firebase displayName as "Full Name | @username".
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

/** Sign out and return the user to the landing login page. */
export async function signOutUser(): Promise<void> {
  await signOut(auth);
  window.location.href = `${LANDING_URL}/login`;
}

/**
 * Redirect the authenticated user into the Yugvex Software App.
 *
 * Firebase browserLocalPersistence (set in lib/firebase.ts) keeps the
 * session alive across the navigation so the software app can verify it.
 * No tokens are passed in the URL.
 */
export async function redirectToApp(): Promise<void> {
  const user = auth.currentUser;

  if (!user) {
    window.location.href = `${LANDING_URL}/login`;
    return;
  }

  window.location.href = `${APP_URL}/dashboard`;
}
