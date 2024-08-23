<script lang="ts">
	import PaddedContainer from '$lib/components/containers/PaddedContainer.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import Header from '$lib/components/content/Header.svelte';
	import AddNewButton from '$lib/components/buttons/AddNewButton.svelte';

	import type { Unsubscriber } from 'svelte/store';
	import type { PollFormat, PollTableRowFormat } from '$lib/types/poll';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { onValue } from 'firebase/database';
	import { adminPollsAddPage, adminPollsPage, authLoginPage } from '$utils/pages';
	import { fetchIsFireBaseUserAdmin, getFirebaseUserId } from '$lib/firebase/auth';
	import { getAllPollsRef } from '$lib/firebase/polls';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';

	let unsubPolls: Unsubscriber;

	let pollTable: PollTableRowFormat[] = [];

	const setPollTableSource = (): TableSource => ({
		head: ['Name', 'Type', 'Default Answer Type', 'Opening Date', 'Closing Date'],
		body: tableMapperValues(pollTable, [
			'name',
			'type',
			'defaultAnswerType',
			'openingDateTime',
			'closingDateTime',
		]),
		meta: tableMapperValues(pollTable, ['pollId']),
		foot: ['Totals', `<span class="badge variant-soft-primary">${pollTable.length}<span>`],
	});

	$: pollTableData = pollTable && setPollTableSource();

	const onTableRowSelect = (event: CustomEvent) => goto(`${adminPollsPage}/${event.detail}`);

	onMount(() => {
		const userId = getFirebaseUserId();
		if (!userId) return goto(authLoginPage);

		fetchIsFireBaseUserAdmin(userId).then((isAdmin) => {
			if (!isAdmin) return goto(authLoginPage);
		});

		unsubPolls = onValue(getAllPollsRef(), (snapshot) => {
			if (!snapshot.exists()) return;

			const list: PollTableRowFormat[] = [];

			snapshot.forEach((childSnapshot) => {
				const childData = childSnapshot.val() as PollFormat;
				const row: PollTableRowFormat = {
					pollId: childSnapshot.key,
					name: childData.name,
					type: childData.type,
					defaultAnswerType: childData.defaultAnswerType,
					openingDateTime: childData.openingDateTime,
					closingDateTime: childData.closingDateTime,
				};
				list.push(row);
			});

			pollTable = list;
		});
	});

	onDestroy(() => {
		if (unsubPolls) unsubPolls();
	});
</script>

<PaddedContainer>
	<Header label="Polls" />

	<br />

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

	<br />

	<SurfaceContainer>
		<SurfaceHeader label="Totals" />
		<Table interactive source={pollTableData} on:selected={onTableRowSelect} />
	</SurfaceContainer>
</PaddedContainer>
