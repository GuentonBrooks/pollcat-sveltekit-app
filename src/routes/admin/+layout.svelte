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
		<div class="fixed top-0 left-0 right-0">
			<div class="bg-top-texture bg-cover rounded-b-3xl md:rounded-bl-none">
				<AdminAppBar />
			</div>
		</div>
	</svelte:fragment>

	<!-- Nav Rail -->
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden md:block h-full fixed">
			<div class="h-full pt-24">
				<AdminAppRail />
			</div>
		</div>
	</svelte:fragment>

	<div class="pt-28 pb-24 md:pb-4 md:pt-32 md:pl-24">
		<slot />
	</div>

	<!-- Flat Alert Container -->
	<svelte:fragment slot="pageFooter">
		<!-- <div class="mr-8 ml-2 pb-28 md:pb-4 md:pl-20"> -->
		<div class="mr-8 ml-2 fixed bottom-24 left-0 right-0 md:bottom-4 md:left-20">
			<FlatAlert />
		</div>
	</svelte:fragment>

	<!-- Bottom Nav -->
	<svelte:fragment slot="footer">
		<div class="block md:hidden fixed bottom-0 left-0 right-0">
			<AdminBottomNav />
		</div>
	</svelte:fragment>
</AppShell>
