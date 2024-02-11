<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import NavMenuButton from '../buttons/NavMenuButton.svelte';
	import LogoutButton from '../buttons/LogoutButton.svelte';

	import { isNavOnState } from '$lib/store/alert';
</script>

<AppBar background="bg-surface-100 dark:bg-surface-500">
	<svelte:fragment slot="lead">
		<NavMenuButton on:click={() => isNavOnState.set(!$isNavOnState)} />
		<strong class="text-xl ml-3">Admin</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />

		<LogoutButton />
	</svelte:fragment>
</AppBar>
