<script lang="ts">
	import AuthHeader from '$lib/components/content/AuthHeader.svelte';
	import SurfaceHeader from '$lib/components/content/SurfaceHeader.svelte';
	import SurfaceContainer from '$lib/components/containers/SurfaceContainer.svelte';
	import TextInputWithLabel from '$lib/components/inputs/TextInputWithLabel.svelte';
	import SurfaceToggle from '$lib/components/inputs/SurfaceToggle.svelte';

	import CancelButton from '$lib/components/buttons/CancelButton.svelte';
	import SubmitButton from '$lib/components/buttons/SubmitButton.svelte';

	import FlatAlert from '$lib/components/content/FlatAlert.svelte';
	import navigate, { adminQuestionsPage, gotoAdminPollQuestionPage } from '$lib/navigate';
	import SurfaceAddFab from '$lib/components/buttons/SurfaceAddFab.svelte';
	import type { PollQuestionFormat } from '$lib/types/poll';
	import { page } from '$app/stores';
	import { editPollQuestionAsync } from '$lib/firebase/polls';

	let question: string = '';
	let isMultipleChoice: boolean = true;
	let answerOptions: string[] = [];

	let questionRef: HTMLInputElement;
	let answerRef: HTMLInputElement;

	const sumbitNewQuestion = () => {
		const pollId = $page.params.pollId;
		const qid = $page.params.qid;
		const newQuestion: PollQuestionFormat = {
			question,
			isMultipleChoice,
			answerOptions
		};

		if (!pollId) return;
		if (!qid) return;

		editPollQuestionAsync(pollId, qid, newQuestion).then(() => gotoAdminPollQuestionPage(pollId));
	};
</script>

<div class="grid grid-cols-10 m-5 mt-10 gap-10">
	<div class="col-span-10">
		<AuthHeader label="Create New Question" />
	</div>

	<!-- Question Input -->
	<div
		class="col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4"
	>
		<SurfaceContainer>
			<SurfaceHeader label="Enter Question" />
			<TextInputWithLabel bind:value={question} bind:ref={questionRef} placeholder="Question" />
		</SurfaceContainer>
	</div>

	<!-- Is Multiple Choice Selection -->
	<div
		class="col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4"
	>
		<SurfaceContainer>
			<SurfaceHeader label="Is the Question Multiple Choice?" />
			<SurfaceToggle bind:value={isMultipleChoice} />
		</SurfaceContainer>
	</div>

	<!-- Answers -->
	{#if isMultipleChoice}
		<div
			class="col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4"
		>
			<SurfaceContainer>
				<SurfaceHeader label="Add Answer Options" />
				<div class="mb-3">
					<TextInputWithLabel
						bind:value={answerOptions[0]}
						bind:ref={answerRef}
						placeholder="Question"
					/>
				</div>
				<div class="mx-4">
					<SurfaceAddFab />
				</div>
			</SurfaceContainer>
		</div>
	{/if}

	<div class="col-span-10 place-self-stretch grid grid-cols-2 place-items-center">
		<CancelButton on:click={() => navigate(adminQuestionsPage)} />
		<SubmitButton on:click={sumbitNewQuestion} />
	</div>

	<div class="col-span-10">
		<FlatAlert />
	</div>
</div>
