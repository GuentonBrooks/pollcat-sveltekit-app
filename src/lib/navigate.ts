import { goto } from '$app/navigation';

export const rootPage = '/';
export const authLoginPage = '/auth/login';
export const authAdminLoginPage = '/auth/admin';
export const authForgotPage = '/auth/forgot';
export const authSignupPage = '/auth/signup';
export const homePage = '/home';

/**
 * Navigate to the specified Page by its uri string.
 *
 * @param {string} uri
 */
export default (uri: string) => goto(uri);

/** Navigate to the Root Page. */
export const gotoRootPage = () => goto(rootPage);

/** Navigate to the Login Page. */
export const gotoLoginPage = () => goto(authLoginPage);

/** Navigate to the Administrator Login Page. */
export const gotoAdminLoginPage = () => goto(authAdminLoginPage);

/** Navigate to the Home Page. */
export const gotoHomePage = () => goto(homePage);
