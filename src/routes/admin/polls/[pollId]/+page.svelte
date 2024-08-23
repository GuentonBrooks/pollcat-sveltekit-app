<script lang="ts">
	import IconQuestions from '~icons/mdi/help-box-multiple';

	import TenColGridContainer from '$lib/components/containers/TenColGridContainer.svelte';
	import Header from '$lib/components/content/Header.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import TextInputWithLabel from '$lib/components/inputs/TextInputWithLabel.svelte';
	import SurfaceDateTimeInput from '$lib/components/inputs/SurfaceDateTimeInput.svelte';
	import SelectPollType from '$lib/components/inputs/SelectPollType.svelte';
	import SelectPollDefaultAnswerType from '$lib/components/inputs/SelectPollDefaultAnswerType.svelte';
	import PollTypeDescription from '$lib/components/content/PollTypeDescription.svelte';
	import PollDefaultAnswerTypeDescription from '$lib/components/content/PollDefaultAnswerTypeDescription.svelte';
	import CancelButton from '$lib/components/buttons/CancelButton.svelte';
	import SubmitButton from '$lib/components/buttons/SubmitButton.svelte';
	import PrimaryButton from '$lib/components/buttons/PrimaryButton.svelte';

	import type {
		PollFormat,
		PollDefaultAnswerType,
		PollType,
		PollQuestionFormat,
		PollQuestionTableRowFormat,
	} from '$lib/types/poll';
	import type { Unsubscriber } from 'svelte/store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import { onValue } from 'firebase/database';
	import { adminPollsPage, authLoginPage } from '$utils/pages';
	import { editPollByIdAsync, getAllPollQuestionsRef, getPollRef } from '$lib/firebase/polls';
	import { fetchIsFireBaseUserAdmin, getFirebaseUserId } from '$lib/firebase/auth';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import isValidPollFormat from '$lib/validation/poll/isValidPollFormat';

	const pollId = $page.params.pollId;

	let unsubPolls: Unsubscriber;
	let unsubPollQuestions: Unsubscriber;

	let name: string = '';
	let type: PollType = 'vote';
	let defaultAnswerType: PollDefaultAnswerType = 'employee';
	let openingDateTime: string = '';
	let closingDateTime: string = '';

	let PollQuestionTable: PollQuestionTableRowFormat[] = [];

	let nameRef: HTMLInputElement;
	let openingDateTimeRef: HTMLInputElement;
	let closingDateTimeRef: HTMLInputElement;

	const setPollQuestionTableSource = (): TableSource => ({
		head: ['Question', 'Is Multiple Choice'],
		body: tableMapperValues(PollQuestionTable, ['question', 'isMultipleChoice']),
		meta: tableMapperValues(PollQuestionTable, ['questionId']),
		foot: ['Totals', `<span class="badge variant-soft-primary">${PollQuestionTable.length}<span>`],
	});

	$: PollQuestionTableData = PollQuestionTable && setPollQuestionTableSource();

	const onTableRowSelect = (event: CustomEvent) => goto(`${adminPollsPage}/${event.detail}`);

	onMount(() => {
		const userId = getFirebaseUserId();
		if (!userId) return goto(authLoginPage);
		if (!pollId) return goto(adminPollsPage);

		fetchIsFireBaseUserAdmin(userId).then((isAdmin) => {
			if (!isAdmin) return goto(authLoginPage);
		});

		unsubPolls = onValue(getPollRef(pollId), (snapshot) => {
			if (!snapshot.exists()) return;

			const data = snapshot.val() as PollFormat;
			name = data.name;
			type = data.type;
			defaultAnswerType = data.defaultAnswerType;
			openingDateTime = data.openingDateTime;
			closingDateTime = data.closingDateTime;
		});

		unsubPollQuestions = onValue(getAllPollQuestionsRef(pollId), (snapshot) => {
			if (!snapshot.exists()) return;

			const list: PollQuestionTableRowFormat[] = [];

			snapshot.forEach((childSnapshot) => {
				const childData = childSnapshot.val() as PollQuestionFormat;
				const row: PollQuestionTableRowFormat = {
					questionId: childSnapshot.key,
					question: childData.question,
					isMultipleChoice: childData.isMultipleChoice,
				};

				list.push(row);
			});
		});
	});

	onDestroy(() => {
		if (unsubPolls) unsubPolls();
		if (unsubPollQuestions) unsubPollQuestions();
	});

	const submitPollEdit = () => {
		const editPoll: PollFormat = {
			name,
			type,
			defaultAnswerType,
			openingDateTime,
			closingDateTime,
		};
		if (!isValidPollFormat(editPoll)) return;

		editPollByIdAsync($page.params.pollId, editPoll)
			.then(() => goto(adminPollsPage))
			.catch(() => {});
	};

	const gotoPollQuestions = () => {
		const pollId = $page.params.pollId;

		pollId && goto(`${adminPollsPage}/${pollId}/questions`);
	};
</script>

<TenColGridContainer>
	<div class="col-span-10">
		<Header label="Edit Poll" />
	</div>

	<!-- Poll Name Input -->
	<div class="col-span-10">
		<SurfaceContainer>
			<SurfaceHeader label="Enter Poll Name" />
			<TextInputWithLabel
				bind:value={name}
				bind:ref={nameRef}
				placeholder="Poll Name"
				name="pollName"
			/>
		</SurfaceContainer>
	</div>

	<!-- Poll Type Selection -->
	<div class="col-span-10 md:col-span-5 xl:col-span-5">
		<SurfaceContainer>
			<SurfaceHeader label="Select Poll Type" />
			<SelectPollType bind:value={type} />
		</SurfaceContainer>
	</div>
	<div class="hidden md:block md:col-span-5">
		<SurfaceContainer>
			<SurfaceHeader label="Poll Type Descriptions" />
			<PollTypeDescription />
		</SurfaceContainer>
	</div>

	<!-- Default Answer Type Selection -->
	<div class="col-span-10 md:col-span-5 xl:col-span-5">
		<SurfaceContainer>
			<SurfaceHeader label="Select Default Answer Model" />
			<SelectPollDefaultAnswerType bind:value={defaultAnswerType} />
		</SurfaceContainer>
	</div>
	<div class="hidden md:block md:col-span-5">
		<SurfaceContainer>
			<SurfaceHeader label="Poll Default Answer Descriptions" />
			<PollDefaultAnswerTypeDescription />
		</SurfaceContainer>
	</div>

	<!-- Automatic Open/Close Date Selection -->
	<div class="col-span-10 md:col-span-5">
		<SurfaceContainer>
			<SurfaceHeader label="Select Opening Date" />
			<SurfaceDateTimeInput
				bind:value={openingDateTime}
				bind:ref={openingDateTimeRef}
				placeholder="Opening Date"
				name="openingDate"
			/>
		</SurfaceContainer>
	</div>
	<div class="col-span-10 md:col-span-5">
		<SurfaceContainer>
			<SurfaceHeader label="Select Closing Date" />
			<SurfaceDateTimeInput
				bind:value={closingDateTime}
				bind:ref={closingDateTimeRef}
				placeholder="Closing Date"
				name="closingDate"
			/>
		</SurfaceContainer>
	</div>

	<div class="col-span-10">
		<SurfaceContainer>
			<SurfaceHeader label="Poll Questions" />
			<Table interactive source={PollQuestionTableData} on:selected={onTableRowSelect} />
		</SurfaceContainer>
	</div>

	<div class="col-span-10">
		<div class="flex justify-around">
			<CancelButton on:click={() => goto(adminPollsPage)} />
			<SubmitButton on:click={submitPollEdit} />
			<PrimaryButton label="Edit Questions" on:click={gotoPollQuestions}>
				<IconQuestions />
			</PrimaryButton>
		</div>
	</div>
</TenColGridContainer>
