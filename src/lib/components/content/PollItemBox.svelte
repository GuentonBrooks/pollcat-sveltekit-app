<script lang="ts">
	import EditFabSmall from '../buttons/EditFabSmall.svelte';

	import { createEventDispatcher } from 'svelte';
	import type { PollFormat } from '$lib/types/poll';

	const dispatch = createEventDispatcher();
	const edit = () => dispatch('edit');

	export let poll: PollFormat;
</script>

<div class="variant-soft-secondary dark:variant-soft-secondary rounded-xl p-3">
	<div class="flex justify-between items-center mb-4">
		<h2 class="h2 text-surface-500 dark:text-secondary-800">{poll.name}</h2>
		<EditFabSmall on:click={edit} />
	</div>

	<div class="flex justify-between">
		<p>Poll Type:</p>
		<p>{poll.type}</p>
	</div>

	<div class="flex justify-between">
		<p>Answer Type:</p>
		<p>{poll.defaultAnswerType}</p>
	</div>

	<div class="flex justify-between">
		<p>Opening Date:</p>
		<p>{poll.openingDateTime || 'Not Set'}</p>
	</div>

	<div class="flex justify-between">
		<p>Closing Date:</p>
		<p>{poll.closingDateTime || 'Not Set'}</p>
	</div>
</div>
