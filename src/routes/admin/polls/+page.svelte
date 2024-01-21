<script lang="ts">
	import HeaderWithAdd from '$lib/components/content/HeaderWithAdd.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import EightColGridContainer from '$lib/components/containers/EightColGridContainer.svelte';
	import PollItemBox from '$lib/components/content/PollItemBox.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import navigate, { adminPollsEditPage, adminPollsAddPage } from '$lib/navigate';
	import { allPollState, selectedPollIdState, selectedPollState } from '$lib/store/poll';
	import type { PollFormat } from '$lib/types/poll';

	const onEditPoll = (pollId: string, poll: PollFormat) => {
		selectedPollIdState.set(pollId);
		selectedPollState.set(poll);
		navigate(`${adminPollsEditPage}/${pollId}`);
	};
</script>

<EightColGridContainer>
	<HeaderWithAdd label="Polls" on:click={() => navigate(adminPollsAddPage)} />

	{#each Object.entries($allPollState) as [key, poll]}
		<div class="col-span-8 md:col-span-4 xl:col-span-2">
			<PollItemBox {poll} on:edit={() => onEditPoll(key, poll)} />
		</div>
	{/each}
</EightColGridContainer>
