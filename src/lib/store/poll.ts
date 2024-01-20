import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { PollFormat, PollsFirebaseFormat } from '$lib/types/poll';

const initPollState: PollFormat = {} as PollFormat;
const initAllPollState: PollsFirebaseFormat = {} as PollsFirebaseFormat;

export const selectedPollIdState: Writable<string> = localStorageStore('selectedPollId', '');
export const selectedPollState: Writable<PollFormat> = writable(initPollState);
export const allPollState: Writable<PollsFirebaseFormat> = writable(initAllPollState);
