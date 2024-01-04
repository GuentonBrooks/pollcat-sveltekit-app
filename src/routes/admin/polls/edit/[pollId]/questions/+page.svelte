<script lang="ts">
	import { gotoAdminPollQuestionEditPage } from "$lib/navigate";
	import FormHeader from "$lib/components/text/FormHeader.svelte";
	import { selectedPollState } from "$lib/store/poll";
	import NewQuestionButton from "$lib/components/buttons/NewQuestionButton.svelte";
	import { page } from "$app/stores";
	import { createNewPollQuestionAsync } from "$lib/firebase/polls";
	import type { PollQuestionFormat } from "$lib/types/poll";
	import type { FirebaseKeyValueObjectFormat } from "$lib/types/auth";

  let questions: FirebaseKeyValueObjectFormat = {};
  selectedPollState.subscribe((state) => questions = state.questions || {});

  const newPollQuestion: PollQuestionFormat = {
    question: "",
    isMultipleChoice: true,
    answerOptions: [],
  };

  const createNewQuestion = () =>
    createNewPollQuestionAsync($page.params.pollId, newPollQuestion)
      .then((qid) => gotoAdminPollQuestionEditPage($page.params.pollId, qid));
</script>

<div class="grid grid-cols-10 my-10 mx-5 gap-10">
  <div class="col-span-10 md:col-span-6 xl:col-span-8">
    <FormHeader label="{$selectedPollState.name} Questions" />
  </div>
  <div class="col-span-10 md:col-span-4 xl:col-span-2">
    <NewQuestionButton on:click={createNewQuestion} />
  </div>

  {#each Object.entries(questions) as [qid, question]}
  <div class="col-span-10">
    <p>{qid}</p>
    <h1>{question}</h1>
  </div>
  {/each}
</div>