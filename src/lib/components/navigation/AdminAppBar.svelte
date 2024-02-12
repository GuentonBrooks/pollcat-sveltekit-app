<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import NavMenuButton from '../buttons/NavMenuButton.svelte';
	import LogoutButton from '../buttons/LogoutButton.svelte';

	import { isNavOnState } from '$lib/store/alert';
</script>

<AppBar
	background="bg-secondary-500/50 dark:bg-secondary-900/50 rounded-b-3xl md:rounded-bl-none"
	padding="p-6"
>
	<svelte:fragment slot="lead">
		<NavMenuButton on:click={() => isNavOnState.set(!$isNavOnState)} />
		<strong class="text-xl ml-6 text-surface-50">Admin</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch ring="border-none" fillDark="fill-tertiary-500" fillLight="fill-tertiary-400" />

		<LogoutButton />
	</svelte:fragment>
</AppBar>
