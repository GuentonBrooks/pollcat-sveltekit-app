import { app, db } from './app';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	createUserWithEmailAndPassword,
	signOut
} from 'firebase/auth';
import { ref, set } from 'firebase/database';

import { alertTextState, alertTypeState } from '../../store/alert';

/** Initialize Auth Handler */
export const auth = getAuth(app);

/** Google Auth Provider */
const provider = new GoogleAuthProvider();

/** Sign in with Google redirect */
export const googleSignInRedirect = () => signInWithRedirect(auth, provider);

/** Sign in with Google popup */
export const googleSignInPopup = () => signInWithPopup(auth, provider);

/** Sign Out */
export const googleSignOut = () => signOut(auth);

/** Sign up with Email and Password */
export const signupWithEmailAndPassword = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => {
			storeAuthUserAsync();
		})
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code);
		});

/** Get Current User's Uid */
export const getAuthUserId = () => (auth.currentUser ? auth.currentUser.uid : '');

/** Get Current User's short Info */
export const getAuthUserShortInfo = () => ({
	uid: auth.currentUser ? auth.currentUser.uid : '',
	email: auth.currentUser ? auth.currentUser.email : '',
	displayName: auth.currentUser ? auth.currentUser.displayName : '',
	photoURL: auth.currentUser ? auth.currentUser.photoURL : ''
});

/** Get Current User's long Info */
export const getAuthUserLongInfo = () => auth.currentUser;

/** Stores the current authenticated user in firebase Reat-Time DB */
export const storeAuthUserAsync = () =>
	set(ref(db, `users/${getAuthUserId()}`), getAuthUserShortInfo());
