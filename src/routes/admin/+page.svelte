<script lang="ts">
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import EightColGridContainer from '$lib/components/containers/EightColGridContainer.svelte';
	import Header from '$lib/components/content/Header.svelte';
	import PollItemBox from '$lib/components/content/PollItemBox.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import navigate, { adminPollsEditPage } from '$lib/navigate';
	import { allPollState, selectedPollIdState, selectedPollState } from '$lib/store/poll';
	import type { PollFormat } from '$lib/types/poll';

	const onEditPoll = (pollId: string, poll: PollFormat) => {
		selectedPollIdState.set(pollId);
		selectedPollState.set(poll);
		navigate(`${adminPollsEditPage}/${pollId}`);
	};
</script>

<EightColGridContainer>
	<div class="col-span-8 mb-10">
		<Header label="Admin Home" />
	</div>

	<div class="col-span-8">
		<SurfaceContainer>
			<SurfaceHeader label="Polls" />
		</SurfaceContainer>
	</div>

	{#each Object.entries($allPollState) as [key, poll]}
		<div class="col-span-8 md:col-span-4 xl:col-span-2">
			<PollItemBox {poll} on:edit={() => onEditPoll(key, poll)} />
		</div>
	{/each}
</EightColGridContainer>
