import { app, db } from './app';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut
} from 'firebase/auth';
import { ref, set } from 'firebase/database';

import { alertTextState, alertTypeState } from '../../store/alert';
import { emailState, firstNameState, lastNameState, userIdState } from '../../store/auth';

/** Initialize Auth Handler */
export const auth = getAuth(app);

/** Google Auth Provider */
const provider = new GoogleAuthProvider();

/** Sign in with Google redirect */
export const googleSignInRedirect = () => signInWithRedirect(auth, provider);

/** Sign in with Google popup */
export const googleSignInPopup = () => signInWithPopup(auth, provider);

/** Sign Out */
export const firebaseSignOut = () =>
	signOut(auth).catch((error) => {
		alertTypeState.set('error');
		alertTextState.set(error.code);
		throw error;
	});

/** Sign up with Email and Password */
export const firebasePasswordSignUp = (email: string, password: string) =>
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => storeFirebaseUserAsync())
		.then(() => setFirebaseUserState())
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code);
			throw error;
		});

/** Sign in with Email and Password */
export const firebasePasswordSignIn = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)
		.then(() => storeFirebaseUserAsync())
		.then(() => setFirebaseUserState())
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code);
			throw error;
		});

/** Request Password Reset Email */
export const firebaseSendPasswordResetEmail = (email: string) =>
	sendPasswordResetEmail(auth, email)
		.then(() => {
			alertTypeState.set('success');
			alertTextState.set('Password Reset Email Successfully Sent');
		})
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code);
			throw error;
		});

/** Get Current User's Uid */
export const getFirebaseUserId = () => (auth.currentUser ? auth.currentUser.uid : '');

/** Get Current User's short Info */
export const getFirebaseUserShortInfo = () => ({
	uid: auth.currentUser ? auth.currentUser.uid : '',
	email: auth.currentUser ? auth.currentUser.email : '',
	displayName: auth.currentUser ? auth.currentUser.displayName : '',
	photoURL: auth.currentUser ? auth.currentUser.photoURL : ''
});

/** Get Current User's long Info */
export const getFirebaseUserLongInfo = () => auth.currentUser;

/** Stores the current authenticated user in firebase Reat-Time DB */
export const storeFirebaseUserAsync = () =>
	set(ref(db, `users/${getFirebaseUserId()}`), getFirebaseUserShortInfo());

/** Stores the current authenticated user in state */
export const setFirebaseUserState = () => {
	const user = getFirebaseUserLongInfo();

	if (!user) return;
	userIdState.set(user.uid);

	if (!user.email) return;
	emailState.set(user.email);

	const splitResult = user.email.split('@');
	const firstname = splitResult[0];
	const lastname = splitResult[1];
	firstNameState.set(firstname);
	lastNameState.set(lastname);
};
