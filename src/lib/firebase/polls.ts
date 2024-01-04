import { db } from './app';
import { push, ref } from 'firebase/database';

import type { NewPollFormat } from '$lib/types/poll';
import { alertTextState, alertTypeState } from '$lib/store/alert';

const dbRef = ref(db, 'polls/');

/** Stores a new Poll in the Database and returns the Reference Number */
export const createNewPollAsync = (newPoll: NewPollFormat) =>
	push(dbRef, newPoll)
		.then((resultRef) => {
			const pollId = resultRef.key;

			if (!pollId) {
				throw new Error('pollcat/no-poll-id-received');
			}

			alertTypeState.set('success');
			alertTextState.set(`New Poll Created Successfully ID: ${pollId}`);
			return pollId;
		})
		.catch((error) => {
			alertTypeState.set('error');
			alertTextState.set(error.code || error.message);
			throw error;
		});
