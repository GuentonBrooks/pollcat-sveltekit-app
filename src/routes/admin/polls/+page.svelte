<script>
	import navigate, { adminPollsAddPage } from "$lib/navigate";
	import NewPollButton from "../../../components/buttons/NewPollButton.svelte";
	import FormHeader from "../../../components/text/FormHeader.svelte";

</script>

<div class="grid grid-cols-10 my-10 mx-5 gap-10">
  <div class="col-span-10 md:col-span-6 xl:col-span-8">
    <FormHeader label="Polls" />
  </div>
  <div class="col-span-10 md:col-span-4 xl:col-span-2">
    <NewPollButton on:click={() => navigate(adminPollsAddPage)} />
  </div>
</div>