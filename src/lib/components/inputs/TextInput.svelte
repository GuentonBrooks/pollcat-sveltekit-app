<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let name: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let ref: HTMLInputElement;

	const enter = () => dispatch('enter');
</script>

<input
	class="input border-none"
	type="text"
	{name}
	{placeholder}
	bind:value
	on:keyup={(event) => event.key === 'Enter' && enter()}
	bind:this={ref}
/>
