<script lang="ts">
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import TenColGridContainer from '$lib/components/containers/TenColGridContainer.svelte';
	import Header from '$lib/components/content/Header.svelte';
	import PollItemBox from '$lib/components/content/PollItemBox.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import navigate, { adminPollsAddPage, adminPollsEditPage } from '$lib/navigate';
	import { allPollState, selectedPollIdState, selectedPollState } from '$lib/store/poll';
	import type { PollFormat } from '$lib/types/poll';
	import AddNewButton from '$lib/components/buttons/AddNewButton.svelte';
	import { goto } from '$app/navigation';

	const onEditPoll = (pollId: string, poll: PollFormat) => {
		selectedPollIdState.set(pollId);
		selectedPollState.set(poll);
		navigate(`${adminPollsEditPage}/${pollId}`);
	};
</script>

<TenColGridContainer>
	<div class="col-span-10 mb-10">
		<Header label="Admin Home" />
	</div>

	<div class="col-span-10">
		<SurfaceContainer>
			<div class="flex items-center">
				<div class="flex-1">
					<SurfaceHeader label="Polls" />
				</div>
				<div>
					<AddNewButton on:click={() => goto(adminPollsAddPage)} />
				</div>
			</div>
		</SurfaceContainer>
	</div>

	{#each Object.entries($allPollState) as [key, poll]}
		<div class="col-span-10 md:col-span-5 2xl:col-span-2">
			<PollItemBox {poll} on:edit={() => onEditPoll(key, poll)} />
		</div>
	{/each}
</TenColGridContainer>
