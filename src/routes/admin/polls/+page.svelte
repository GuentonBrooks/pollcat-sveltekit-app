<script lang="ts">
	import TenColGridContainer from '$lib/components/containers/TenColGridContainer.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import Header from '$lib/components/content/Header.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import PollItemBox from '$lib/components/content/PollItemBox.svelte';
	import AddNewButton from '$lib/components/buttons/AddNewButton.svelte';

	import { goto } from '$app/navigation';
	import { adminPollsAddPage, adminPollsPage } from '$lib/pages';
	import { allPollState, selectedPollIdState, selectedPollState } from '$lib/store/poll';
	import type { PollFormat } from '$lib/types/poll';

	const onEditPoll = (pollId: string, poll: PollFormat) => {
		selectedPollIdState.set(pollId);
		selectedPollState.set(poll);
		goto(`${adminPollsPage}/${pollId}`);
	};
</script>

<TenColGridContainer>
	<div class="col-span-10 mb-10">
		<Header label="Polls" />
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
