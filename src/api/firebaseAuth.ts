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

const googleProvider = new GoogleAuthProvider();
import { auth } from '../lib/firebase';

const APP_URL = 'http://localhost:3000';

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
 * Returns the Firebase UserCredential on success.
 */
export async function loginWithEmail(
  email: string,
  password: string
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Register a new user.
 * Sets the Firebase display-name to "name (username)" after account creation.
 */
export async function signupWithEmail(data: SignupData): Promise<UserCredential> {
  const credential = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  // Persist the display name on the Firebase user record
  await updateProfile(credential.user, {
    displayName: `${data.name} | @${data.username}`,
  });

  return credential;
}

/**
 * Sign the current user out and redirect to the landing page.
 */
export async function signOutUser(): Promise<void> {
  await signOut(auth);
  window.location.href = '/';
}

/**
 * Redirect into the Yugvex SaaS App.
 * Firebase session is persisted via IndexedDB; the app simply reads it.
 */
export function redirectToApp(): void {
  window.location.href = `${APP_URL}/dashboard`;
}
