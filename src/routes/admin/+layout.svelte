<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import { isNavOnState } from '$lib/store/alert';
	import AdminAppRail from '$lib/components/navigation/AdminAppRail.svelte';
	import AdminBottomNav from '$lib/components/navigation/AdminBottomNav.svelte';
	import AdminAppBar from '$lib/components/navigation/AdminAppBar.svelte';
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

	<!-- Bottom Nav -->
	<svelte:fragment slot="footer">
		<div class="block md:hidden">
			{#if $isNavOnState}
				<AdminBottomNav />
			{/if}
		</div>
	</svelte:fragment>
</AppShell>
