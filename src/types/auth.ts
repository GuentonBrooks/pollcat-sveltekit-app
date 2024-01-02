/** AUTH - Format for Authenticated Users */
export type AuthUserFormat = {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
};

/** AUTH - Format for signing up users */
export type SignupFormat = {
	email: string;
	password: string;
	passwordConfirm: string;
};

/** AUTH - Format for logging in users */
export type LoginFormat = {
	email: string;
	password: string;
};
