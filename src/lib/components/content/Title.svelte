<script lang="ts">
	export let isError: boolean = false;
</script>

{#if isError}
	<h1 class="h1 font-bold text-error-500">
		{'<PollCat />'}
	</h1>
{:else}
	<h1 class="h1 font-bold text-primary-500">
		{'<PollCat />'}
	</h1>
{/if}
