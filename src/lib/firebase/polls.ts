import { db } from './app';
import { child, get, onValue, push, ref, set } from 'firebase/database';

import type { PollFormat, PollQuestionFormat, PollsFirebaseFormat } from '$lib/types/poll';
import { alertTextState, alertTypeState } from '$lib/store/alert';
import { errorIdNotReceived, errorItemNotFoundById } from '$lib/validation/error/pollcat';
import { allPollState, selectedPollState } from '$lib/store/poll';

const dbRef = ref(db, 'polls/');

/** FIREBASE - Stores a new Poll in the Database and returns the Reference Number */
export const createNewPollAsync = (newPoll: PollFormat) =>
	push(dbRef, newPoll)
		.then((resultRef) => {
			const id = resultRef.key;

			if (!id) {
				throw new Error(errorIdNotReceived);
			}

			alertTypeState.set('success');
			alertTextState.set(`New Poll Created Successfully ID: ${id}`);
			return id;
		})
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code || error.message);
			throw error;
		});

/** FIREBASE - Fetches a poll object by the given PollId */
export const fetchPollById = (pollId: string) =>
	get(child(dbRef, pollId))
		.then((snapshot) => {
			if (!snapshot.exists()) {
				throw new Error(errorItemNotFoundById);
			}

			const pollObject = snapshot.val() as PollFormat;
			selectedPollState.set(pollObject);
			return pollObject;
		})
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code || error.message);
			throw error;
		});

/** FIREBASE - Watches all polld for changes */
export const watchAllPolls = () =>
	onValue(dbRef, (snapshot) => {
		const allPollsObject = snapshot.val() as PollsFirebaseFormat;
		console.log(snapshot.val());
		allPollState.set(allPollsObject);
	});

/** FIREBASE - Watches a poll object by the given PollId */
export const watchPollById = (pollId: string) =>
	onValue(child(dbRef, pollId), (snapshot) => {
		const pollObject = snapshot.val() as PollFormat;
		selectedPollState.set(pollObject);
	});

/** FIREBASE - Stores a new PollQuestion in the Database and returns the Reference Number */
export const createNewPollQuestionAsync = (pollId: string, newPollQuestion: PollQuestionFormat) =>
	push(child(dbRef, `${pollId}/questions`), newPollQuestion)
		.then((resultRef) => {
			const id = resultRef.key;

			if (!id) {
				throw new Error(errorIdNotReceived);
			}

			alertTypeState.set('success');
			alertTextState.set(`New Question Created Successfully ID: ${id}`);
			return id;
		})
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code || error.message);
			throw error;
		});

/** FIREBASE - Edits a PollQuestion in the Database and returns the Reference Number */
export const editPollQuestionAsync = (
	pollId: string,
	qid: string,
	pollQuestion: PollQuestionFormat
) =>
	set(child(dbRef, `${pollId}/questions/${qid}`), pollQuestion).then(() => {
		alertTypeState.set('success');
		alertTextState.set(`Question ID: ${qid} edited successfully`);
	});
