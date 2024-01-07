<script>
	import AdminAppRail from '$lib/components/navigation/AdminAppRail.svelte';
	import AdminBottomNav from '$lib/components/navigation/AdminBottomNav.svelte';
	import AdminAppBar from '$lib/components/navigation/AdminAppBar.svelte';
	import FlatAlert from '$lib/components/content/FlatAlert.svelte';

	import { onDestroy, onMount } from 'svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { isNavOnState } from '$lib/store/alert';
	import { watchAllPolls } from '$lib/firebase/polls';

	let unWatchPolls = () => {};

	onMount(() => (unWatchPolls = watchAllPolls()));
	onDestroy(() => unWatchPolls());
</script>

<AppShell>
	<!-- App Bar -->
	<svelte:fragment slot="header">
		<AdminAppBar />
	</svelte:fragment>

	<!-- Nav Rail -->
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden md:block h-full">
			{#if $isNavOnState}
				<AdminAppRail />
			{/if}
		</div>
	</svelte:fragment>

	<slot />

	<!-- Flat Alert Container -->
	<svelte:fragment slot="pageFooter">
		<div class="mr-8 ml-2">
			<FlatAlert />
		</div>
	</svelte:fragment>

	<!-- Bottom Nav -->
	<svelte:fragment slot="footer">
		<div class="block md:hidden">
			{#if $isNavOnState}
				<AdminBottomNav />
			{/if}
		</div>
	</svelte:fragment>
</AppShell>
