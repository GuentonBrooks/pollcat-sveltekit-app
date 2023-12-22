import { goto } from '$app/navigation';

/**
 * Navigate to the specified Page by its uri string.
 *
 * @param {string} uri
 */
export default (uri: string) => goto(uri);

/**
 * Navigate to the Login Page.
 */
export const gotoLoginPage = () => goto('/login');

/**
 * Navigate to the Home Page.
 */
export const gotoHomePage = () => goto('/home');
