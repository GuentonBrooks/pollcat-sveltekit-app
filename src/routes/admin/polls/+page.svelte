<script lang="ts">
	import TenColGridContainer from '$lib/components/containers/TenColGridContainer.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import Header from '$lib/components/content/Header.svelte';
	import PollItemBox from '$lib/components/content/PollItemBox.svelte';
	import AddNewButton from '$lib/components/buttons/AddNewButton.svelte';

	import type { Unsubscriber } from 'svelte/store';
	import type { PollFormat } from '$lib/types/poll';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onValue } from 'firebase/database';
	import { adminPollsAddPage, adminPollsPage, authLoginPage } from '$utils/pages';
	import { allPollState, selectedPollIdState, selectedPollState } from '$lib/store/poll';
	import { fetchIsFireBaseUserAdmin, getFirebaseUserId } from '$lib/firebase/auth';
	import { getAllPollQuestionsRef } from '$lib/firebase/polls';

	let unsubPolls: Unsubscriber;

	const onEditPoll = (pollId: string, poll: PollFormat) => {
		selectedPollIdState.set(pollId);
		selectedPollState.set(poll);
		goto(`${adminPollsPage}/${pollId}`);
	};

	onMount(() => {
		const userId = getFirebaseUserId();
		if (!userId) return goto(authLoginPage);

		const pollId = $page.params.pollId;
		if (!pollId) return goto(adminPollsPage);

		fetchIsFireBaseUserAdmin(userId).then((isAdmin) => {
			if (!isAdmin) return goto(authLoginPage);
		});

		unsubPolls = onValue(getAllPollQuestionsRef(pollId), (snapshot) => {
			if (!snapshot.exists()) return;

			snapshot.forEach((childSnapshot) => {
				const childData = childSnapshot.val();
				console.log(childData);
			});
		});
	});
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
