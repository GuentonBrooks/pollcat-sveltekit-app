<script lang="ts">
	import IconAdmin from '~icons/mdi/shield-account';
	import NavMenuButton from '../buttons/NavMenuButton.svelte';
	import LogoutButton from '../buttons/LogoutButton.svelte';
	import PollCatSvgSmall from '../images/PollCatSvgSmall.svelte';
	import GlassButton from '../buttons/GlassButton.svelte';

	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { isDarkModeState, isLoadingState, isNavOnState } from '$lib/store';
	import { fetchIsFireBaseUserAdmin, getFirebaseUserId } from '$lib/firebase/auth';
	import { goto } from '$app/navigation';
	import { adminHomePage, authLoginPage } from '$utils/pages';

	const toggleDarkMode = () => isDarkModeState.set(!$isDarkModeState);

	const checkIfAdminThenRedirect = () => {
		const userId = getFirebaseUserId();
		if (!userId) return goto(authLoginPage);

		isLoadingState.set(true);
		fetchIsFireBaseUserAdmin(userId)
			.then((isAdmin) => {
				if (!isAdmin) return;
				else goto(adminHomePage);
			})
			.catch(() => {})
			.finally(() => isLoadingState.set(false));
	};
</script>

<AppBar
	background="bg-tertiary-500/50 dark:bg-tertiary-900/50 rounded-b-3xl md:rounded-bl-none"
	padding="p-6"
>
	<svelte:fragment slot="lead">
		<NavMenuButton on:click={() => isNavOnState.set(!$isNavOnState)} />
		<div class="hidden md:block ml-6">
			<PollCatSvgSmall />
		</div>
		<strong class="text-xl ml-2 text-surface-50">{'<PollCat />'}</strong>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<LightSwitch
			ring="border-none"
			fillDark="fill-tertiary-500"
			fillLight="fill-tertiary-400"
			on:click={toggleDarkMode}
		/>

		<GlassButton label="Admin" on:click={checkIfAdminThenRedirect}>
			<IconAdmin />
		</GlassButton>
		<LogoutButton />
	</svelte:fragment>
</AppBar>
