import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

export const alertTextState: Writable<string> = localStorageStore('alertText', '');
export const alertTypeState: Writable<AlertType> = localStorageStore('alertType', '');
export const isNavOnState: Writable<boolean> = localStorageStore('isNavOn', true);
export const isLoadingState: Writable<boolean> = writable(false);

export type AlertType = '' | 'info' | 'success' | 'warning' | 'error';
