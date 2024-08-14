import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { AlertType } from '$lib/types/alert';

export const alertTextState: Writable<string> = localStorageStore('alertText', '');
export const alertTypeState: Writable<AlertType> = localStorageStore('alertType', '');
export const isDarkModeState: Writable<boolean> = localStorageStore('isDarkMode', false);
export const isNavOnState: Writable<boolean> = localStorageStore('isNavOn', true);
export const isLoadingState: Writable<boolean> = writable(false);
export const isAnimatingState: Writable<boolean> = writable(false);

export const isIbisHeroSelected: Writable<boolean> = writable(false);
export const isCccHeroSelected: Writable<boolean> = writable(false);
export const isSplikaHeroSelected: Writable<boolean> = writable(false);
