<script lang="ts">
	import Header from '$lib/components/content/Header.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import SurfaceTextInput from '$lib/components/inputs/SurfaceTextInput.svelte';
	import SurfaceDateTimeInput from '$lib/components/inputs/SurfaceDateTimeInput.svelte';
	import SelectPollType from '$lib/components/inputs/SelectPollType.svelte';
	import SelectPollDefaultAnswerType from '$lib/components/inputs/SelectPollDefaultAnswerType.svelte';
	import PollTypeDescription from '$lib/components/content/PollTypeDescription.svelte';
	import PollDefaultAnswerTypeDescription from '$lib/components/content/PollDefaultAnswerTypeDescription.svelte';

	import CancelButton from '$lib/components/buttons/CancelButton.svelte';
	import SubmitButton from '$lib/components/buttons/SubmitButton.svelte';

	import type { PollFormat, PollDefaultAnswerType, PollType } from '$lib/types/poll';
	import isValidNewPollFormat from '$lib/validation/poll/isValidNewPollFormat';
	import { createNewPollAsync } from '$lib/firebase/polls';
	import navigate, { adminPollsPage } from '$lib/navigate';
	import { selectedPollIdState } from '$lib/store/poll';

	let name = '';
	let type: PollType = 'vote';
	let defaultAnswerType: PollDefaultAnswerType = 'employee';
	let openingDateTime = '';
	let closingDateTime = '';

	let nameRef: HTMLInputElement;
	let openingDateTimeRef: HTMLInputElement;
	let closingDateTimeRef: HTMLInputElement;

	const sumbitNewPoll = () => {
		const editPoll: PollFormat = {
			name,
			type,
			defaultAnswerType,
			openingDateTime,
			closingDateTime
		};
		// if (!isValidNewPollFormat(editPoll)) return;

		// createNewPollAsync(editPoll).then((pollId) => selectedPollIdState.set(pollId));
	};
</script>

<div class="grid grid-cols-10 m-5 mt-10 gap-10">
	<div class="col-span-10">
		<Header label="Edit Poll" />
	</div>

	<!-- Poll Name Input -->
	<div
		class="col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4"
	>
		<SurfaceContainer>
			<SurfaceHeader label="Enter Poll Name" />
			<SurfaceTextInput
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
			<SelectPollType value={type} />
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
			<SelectPollDefaultAnswerType value={defaultAnswerType} />
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

	<div class="col-span-10 place-self-stretch grid grid-cols-2 place-items-center">
		<CancelButton on:click={() => navigate(adminPollsPage)} />
		<SubmitButton on:click={sumbitNewPoll} />
	</div>
</div>
