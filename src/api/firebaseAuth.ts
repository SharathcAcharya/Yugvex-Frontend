/**
 * Firebase Authentication Service
 * ---------------------------------
 * ARCHITECTURE NOTE:
 * yugvex.vercel.app and app.yugvex.vercel.app are different domains.
 * Firebase Auth state (IndexedDB) is domain-scoped - the session
 * created here is invisible to the software app.
 *
 * SOLUTION - ID Token Handoff:
 * After every successful auth event, we fetch a fresh Firebase ID token
 * (signed JWT, 1-hour TTL) and pass it to the software app's
 * /auth/callback?token=... endpoint. The software app's Firebase Admin
 * SDK verifies the token independently and creates its own server session.
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

const APP_URL     = import.meta.env.VITE_APP_URL     ?? 'https://app.yugvex.vercel.app';
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
 * Redirect into the Yugvex Software App after successful authentication.
 *
 * 1. Confirm a Firebase user exists on this domain.
 * 2. Force-refresh the ID token (guarantees freshness, avoids stale tokens).
 * 3. Redirect to /auth/callback on the software app with the token.
 *
 * The software app receives the token, calls Firebase Admin verifyIdToken(),
 * creates a server-side session, then sends the user to /dashboard.
 */
export async function redirectToApp(): Promise<void> {
  const user = auth.currentUser;

  if (!user) {
    window.location.href = `${LANDING_URL}/login`;
    return;
  }

  try {
    const idToken = await user.getIdToken(true);
    window.location.href = `${APP_URL}/auth/callback?token=${encodeURIComponent(idToken)}`;
  } catch {
    window.location.href = `${LANDING_URL}/login`;
  }
}
