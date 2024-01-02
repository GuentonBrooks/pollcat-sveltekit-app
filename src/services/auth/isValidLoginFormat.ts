import isEmpty from 'validator/lib/isEmpty';
import isAscii from 'validator/lib/isAscii';

import { alertTextState, alertTypeState } from '../../store/alert';
import type { LoginFormat } from '../../types/auth';

/**
 * Validate the login format and parameters
 *
 * @param {LoginFormat} loginFormat
 * @returns {boolean}
 */
export default (loginFormat: LoginFormat) => {
	// Check if the email has a value
	if (isEmpty(loginFormat.email)) {
		alertTypeState.set('warning');
		alertTextState.set('Please enter a Email');
		return false;
	}

	// Check if the password has a value
	if (isEmpty(loginFormat.password)) {
		alertTypeState.set('warning');
		alertTextState.set('Please enter a password');
		return false;
	}

	// Check if the email has forbidden characters
	if (!isAscii(loginFormat.email)) {
		alertTypeState.set('warning');
		alertTextState.set('Your Email contains forbidden characters');
		return false;
	}

	// Check if the password has forbidden characters
	if (!isAscii(loginFormat.password)) {
		alertTypeState.set('warning');
		alertTextState.set('Your password contains forbidden characters');
		return false;
	}

	return true;
};
