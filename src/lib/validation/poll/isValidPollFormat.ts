import isEmpty from 'validator/lib/isEmpty';
import isAscii from 'validator/lib/isAscii';

import { alertTextState, alertTypeState } from '$lib/store/alert';
import type { PollFormat } from '$lib/types/poll';

/**
 * Validate the login new Poll Format parameters
 *
 * @param newPoll
 */
export default (newPoll: PollFormat) => {
	// Check if the name has a value
	if (isEmpty(newPoll.name)) {
		alertTypeState.set('warning');
		alertTextState.set('Please enter an Poll Name');
		return false;
	}

	// Check if the type has a value
	if (isEmpty(newPoll.type)) {
		alertTypeState.set('warning');
		alertTextState.set('Please Select a Poll Type');
		return false;
	}

	// Check if the defaultAnswerType has a value
	if (isEmpty(newPoll.defaultAnswerType)) {
		alertTypeState.set('warning');
		alertTextState.set('Please Select a Default Answer Model');
		return false;
	}

	// Check if the name has forbidden characters
	if (!isAscii(newPoll.name)) {
		alertTypeState.set('warning');
		alertTextState.set('Poll Name contains forbidden characters');
		return false;
	}

	// Check if the type has forbidden characters
	if (!isAscii(newPoll.type)) {
		alertTypeState.set('warning');
		alertTextState.set('Poll Type contains forbidden characters');
		return false;
	}

	// Check if the defaultAnswerType has forbidden characters
	if (!isAscii(newPoll.defaultAnswerType)) {
		alertTypeState.set('warning');
		alertTextState.set('Default Answer Model contains forbidden characters');
		return false;
	}

	return true;
};
