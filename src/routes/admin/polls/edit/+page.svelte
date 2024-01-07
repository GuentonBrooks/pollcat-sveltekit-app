<script>
	import navigate, { adminPollsAddPage } from '$lib/navigate';
	import AddNewButton from '$lib/components/buttons/AddNewButton.svelte';
	import AuthHeader from '$lib/components/content/AuthHeader.svelte';
</script>

<div class="grid grid-cols-10 my-10 mx-5 gap-10">
	<div class="col-span-10 md:col-span-6 xl:col-span-8">
		<AuthHeader label="Edit Polls" />
	</div>
	<div class="col-span-10 md:col-span-4 xl:col-span-2">
		<AddNewButton on:click={() => navigate(adminPollsAddPage)} />
	</div>
</div>
