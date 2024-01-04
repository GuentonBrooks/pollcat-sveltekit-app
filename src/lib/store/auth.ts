import type { Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const userIdState: Writable<string> = localStorageStore('userIdState', '');
export const emailState: Writable<string> = localStorageStore('emailState', '');
export const firstNameState: Writable<string> = localStorageStore('firstNameState', '');
export const lastNameState: Writable<string> = localStorageStore('lastNameState', '');
