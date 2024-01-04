<script>
	import navigate, { adminQuestionsAddPage } from "$lib/navigate";
	import NewQuestionButton from "$lib/components/buttons/NewQuestionButton.svelte";
	import FormHeader from "$lib/components/text/FormHeader.svelte";

</script>

<div class="grid grid-cols-10 my-10 mx-5 gap-10">
  <div class="col-span-10 md:col-span-6 xl:col-span-8">
    <FormHeader label="Questions" />
  </div>
  <div class="col-span-10 md:col-span-4 xl:col-span-2">
    <NewQuestionButton on:click={() => navigate(adminQuestionsAddPage)} />
  </div>
</div>