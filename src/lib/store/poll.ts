import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { PollFormat } from '$lib/types/poll';

const initPollState: PollFormat = {} as PollFormat;

export const selectedPollIdState: Writable<string> = localStorageStore('selectedPollIdState', '');
export const selectedPollState: Writable<PollFormat> = writable(initPollState);
