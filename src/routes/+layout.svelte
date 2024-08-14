<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import type { Unsubscriber } from 'svelte/store';
	import { onDestroy, onMount } from 'svelte';
	import { isDarkModeState } from '$lib/store';

	let unsubDarkMode: Unsubscriber;

	onMount(() => {
		unsubDarkMode = isDarkModeState.subscribe((isDarkMode) => {
			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	});

	onDestroy(() => unsubDarkMode());
</script>

<AppShell>
	<slot />
</AppShell>
