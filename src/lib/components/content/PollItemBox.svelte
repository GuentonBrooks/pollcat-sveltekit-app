<script lang="ts">
	import EditFabSmall from '../buttons/EditFabSmall.svelte';

	import { createEventDispatcher } from 'svelte';
	import type { PollFormat } from '$lib/types/poll';

	const dispatch = createEventDispatcher();
	const edit = () => dispatch('edit');

	export let poll: PollFormat;
</script>

<div class="variant-soft-primary dark:variant-soft-primary rounded-xl p-3">
	<div class="flex justify-between items-center mb-8">
		<h2 class="h2">{poll.name}</h2>
		<EditFabSmall on:click={edit} />
	</div>

	<div class="flex justify-between">
		<p class="text-surface-900-50-token">Poll Type:</p>
		<p class="text-surface-900-50-token font-bold">{poll.type}</p>
	</div>

	<div class="flex justify-between">
		<p class="text-surface-900-50-token">Answer Type:</p>
		<p class="text-surface-900-50-token font-bold">{poll.defaultAnswerType}</p>
	</div>

	<div class="flex justify-between">
		<p class="text-surface-900-50-token">Opening Date:</p>
		<p class="text-surface-900-50-token font-bold">{poll.openingDateTime || 'Not Set'}</p>
	</div>

	<div class="flex justify-between">
		<p class="text-surface-900-50-token">Closing Date:</p>
		<p class="text-surface-900-50-token font-bold">{poll.closingDateTime || 'Not Set'}</p>
	</div>
</div>
