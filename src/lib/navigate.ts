import { goto } from '$app/navigation';

export const rootPage = '/';
export const authLoginPage = '/auth/login';
export const authAdminLoginPage = '/auth/admin';
export const authForgotPage = '/auth/forgot';
export const authSignupPage = '/auth/signup';
export const homePage = '/home';
export const adminPage = '/admin';
export const adminPollsPage = '/admin/polls';
export const adminPollsAddPage = '/admin/polls/add';
export const adminPollsEditPage = '/admin/polls/edit';
export const adminQuestionsPage = '/admin/questions';
export const adminQuestionsAddPage = '/admin/questions/add';
export const adminRankingsPage = '/admin/rankings';
export const adminUsersPage = '/admin/users';

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

/** Navigate to the Admin Page. */
export const gotoAdminPage = () => goto(adminPage);

/** Navigate to the Admin Poll Question Page. */
export const gotoAdminPollQuestionPage = (pollId: string) =>
	goto(`${adminPollsEditPage}/${pollId}/questions`);

/** Navigate to the Admin Poll Question Page. */
export const gotoAdminPollQuestionEditPage = (pollId: string, qid: string) =>
	goto(`${adminPollsEditPage}/${pollId}/questions/${qid}`);
