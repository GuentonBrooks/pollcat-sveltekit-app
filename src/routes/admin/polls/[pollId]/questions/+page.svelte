<script lang="ts">
	import TenColGridContainer from '$lib/components/containers/TenColGridContainer.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import Header from '$lib/components/content/Header.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import PollItemBox from '$lib/components/content/PollItemBox.svelte';
	import AddNewButton from '$lib/components/buttons/AddNewButton.svelte';

	import type { Unsubscriber } from 'svelte/store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { adminPollsPage } from '$utils/pages';
	import { allPollState } from '$lib/store/poll';
	import { onMount } from 'svelte';
	import {
		fetchIsFireBaseUserAdmin,
		getFirebaseUserId,
		getFirebaseUserShortInfo,
	} from '$lib/firebase/auth';
	import { authLoginPage } from '$utils/pages';
	import { onValue } from 'firebase/database';
	import { getAllPollQuestionsRef } from '$lib/firebase/polls';

	let unsubPollQuestions: Unsubscriber;

	onMount(() => {
		const userId = getFirebaseUserId();
		if (!userId) return goto(authLoginPage);

		const pollId = $page.params.pollId;
		if (!pollId) return goto(adminPollsPage);

		fetchIsFireBaseUserAdmin(userId).then((isAdmin) => {
			if (!isAdmin) return goto(authLoginPage);
		});

		unsubPollQuestions = onValue(getAllPollQuestionsRef(pollId), (snapshot) => {
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
		<Header label="Poll Questions" />
	</div>

	<div class="col-span-10">
		<SurfaceContainer>
			<div class="flex items-center">
				<div class="flex-1">
					<SurfaceHeader label="Questions" />
				</div>
				<div>
					<AddNewButton on:click={() => {}} />
				</div>
			</div>
		</SurfaceContainer>
	</div>

	{#each Object.entries($allPollState) as [key, poll]}
		<div class="col-span-10 md:col-span-5 2xl:col-span-2">test</div>
	{/each}
</TenColGridContainer>
