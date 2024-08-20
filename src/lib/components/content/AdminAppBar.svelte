<script lang="ts">
	import IconAdmin from '~icons/mdi/shield-account';
	import NavMenuButton from '../buttons/NavMenuButton.svelte';
	import LogoutButton from '../buttons/LogoutButton.svelte';
	import GlassButton from '../buttons/GlassButton.svelte';

	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { isDarkModeState, isNavOnState } from '$lib/store';
	import { goto } from '$app/navigation';
	import { homePage, userPage } from '$utils/pages';
	import PollCatSvgSmall from '../images/PollCatSvgSmall.svelte';

	const toggleDarkMode = () => isDarkModeState.set(!$isDarkModeState);
</script>

<AppBar
	background="bg-secondary-500/50 dark:bg-secondary-900/50 rounded-b-3xl md:rounded-bl-none"
	padding="p-6"
>
	<svelte:fragment slot="lead">
		<NavMenuButton on:click={() => isNavOnState.set(!$isNavOnState)} />
		<div class="hidden md:block ml-6">
			<PollCatSvgSmall />
		</div>
		<strong class="text-xl ml-2 text-surface-50">Admin</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch
			ring="border-none"
			fillDark="fill-tertiary-500"
			fillLight="fill-tertiary-400"
			on:click={toggleDarkMode}
		/>

		<GlassButton label="User" on:click={() => goto(homePage)}>
			<IconAdmin />
		</GlassButton>
		<LogoutButton />
	</svelte:fragment>
</AppBar>
