<script>
	import AdminButton from '../buttons/AdminButton.svelte';
	import GitHubButton from '../buttons/GitHubButton.svelte';

	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-primary-500/50 dark:bg-primary-900/50 rounded-b-3xl" padding="p-6">
	<svelte:fragment slot="lead">
		<strong class="h3 ml-6 text-surface-50">{'<PollCat />'}</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<GitHubButton />
		<AdminButton />
		<LightSwitch ring="border-none" fillDark="fill-tertiary-500" fillLight="fill-tertiary-400" />
	</svelte:fragment>
</AppBar>
