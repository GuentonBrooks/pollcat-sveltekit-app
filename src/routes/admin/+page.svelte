<script lang="ts">
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import TenColGridContainer from '$lib/components/containers/TenColGridContainer.svelte';
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

<TenColGridContainer>
	<div class="col-span-10">
		<Header label="Admin Home" />
	</div>

	<div class="col-span-10">
		<SurfaceContainer>
			<SurfaceHeader label="Polls" />
			<div class="grid grid-cols-2 gap-5">
				{#each Object.entries($allPollState) as [key, poll]}
					<PollItemBox {poll} on:edit={() => onEditPoll(key, poll)} />
				{/each}
			</div>
		</SurfaceContainer>
	</div>
</TenColGridContainer>
