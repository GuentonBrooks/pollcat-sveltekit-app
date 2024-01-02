import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const alertTextState: Writable<string> = localStorageStore('alertTextState', '');
export const alertTypeState: Writable<AlertType> = localStorageStore('alertTypeState', '');
export const isLoadingState: Writable<boolean> = writable(false);

export type AlertType = '' | 'info' | 'success' | 'warning' | 'error';
