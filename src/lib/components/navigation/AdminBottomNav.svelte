<script>
	import { page } from '$app/stores';
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import NavPollButton from '../buttons/NavPollButton.svelte';
	import NavUsersButton from '../buttons/NavUsersButton.svelte';
	import NavFlagButton from '../buttons/NavFlagButton.svelte';
	import { adminPage, adminPollsPage, adminRankingsPage, adminUsersPage } from '$lib/navigate';
	import NavHomeButton from '../buttons/NavHomeButton.svelte';
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100 dark:bg-surface-500 w-full"
>
	<TabAnchor href={adminPage} selected={$page.url.pathname === adminPage}>
		<svelte:fragment slot="lead"><NavHomeButton /></svelte:fragment>
		<span>Home</span>
	</TabAnchor>

	<TabAnchor href={adminPollsPage} selected={$page.url.pathname.startsWith(adminPollsPage)}>
		<svelte:fragment slot="lead"><NavPollButton /></svelte:fragment>
		<span>Polls</span>
	</TabAnchor>

	<TabAnchor href={adminRankingsPage} selected={$page.url.pathname.startsWith(adminRankingsPage)}>
		<svelte:fragment slot="lead"><NavFlagButton /></svelte:fragment>
		<span>Rankings</span>
	</TabAnchor>

	<TabAnchor href={adminUsersPage} selected={$page.url.pathname.startsWith(adminUsersPage)}>
		<svelte:fragment slot="lead"><NavUsersButton /></svelte:fragment>
		<span>Users</span>
	</TabAnchor>
</TabGroup>
