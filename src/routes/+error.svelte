<script lang="ts">
	import PrimaryPawButton from '$lib/components/buttons/PrimaryPawButton.svelte';
	import FlatAlert from '$lib/components/content/FlatAlert.svelte';
	import Title from '$lib/components/content/Title.svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { alertTextState, alertTypeState } from '$lib/store';
	import { homePage } from '$utils/pages';

	let errorMessage = $page.error?.message ?? '';

	$: errorMessage && alertTextState.set(errorMessage);
	$: errorMessage && alertTypeState.set('error');
</script>

<div class="h-full grid grid-cols-1 my-5 gap-20 justify-items-center content-center">
	<Title isError />
	<PrimaryPawButton on:click={() => goto(homePage)} />

	<div class="w-full px-10">
		<FlatAlert />
	</div>
</div>
