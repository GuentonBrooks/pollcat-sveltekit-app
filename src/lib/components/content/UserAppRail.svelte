<script lang="ts">
	import { page } from '$app/stores';
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
	import NavPollButton from '../buttons/NavPollButton.svelte';
	import NavUsersButton from '../buttons/NavUsersButton.svelte';
	import NavFlagButton from '../buttons/NavFlagButton.svelte';
	import {
		adminHomePage,
		adminPollsPage,
		adminRankingsPage,
		adminUsersPage,
		homePage,
	} from '$utils/pages';
	import NavHomeButton from '../buttons/NavHomeButton.svelte';
</script>

<AppRail
	background="bg-surface-50 dark:bg-surface-900 shadow-xl"
	active="text-tertiary-500 font-bold"
	hover="hover:variant-soft-tertiary"
	width="w-24"
>
	<AppRailAnchor href={homePage} selected={$page.url.pathname === homePage}>
		<svelte:fragment slot="lead"><NavHomeButton /></svelte:fragment>
		<span>Home</span>
	</AppRailAnchor>

	<AppRailAnchor href={adminPollsPage} selected={$page.url.pathname.startsWith(adminPollsPage)}>
		<svelte:fragment slot="lead"><NavPollButton /></svelte:fragment>
		<span>Polls</span>
	</AppRailAnchor>

	<AppRailAnchor
		href={adminRankingsPage}
		selected={$page.url.pathname.startsWith(adminRankingsPage)}
	>
		<svelte:fragment slot="lead"><NavFlagButton /></svelte:fragment>
		<span>Rankings</span>
	</AppRailAnchor>

	<AppRailAnchor href={adminUsersPage} selected={$page.url.pathname.startsWith(adminUsersPage)}>
		<svelte:fragment slot="lead"><NavUsersButton /></svelte:fragment>
		<span>Users</span>
	</AppRailAnchor>
</AppRail>
