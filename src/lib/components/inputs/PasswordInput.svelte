<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let placeholder: string = 'Password';
	export let value: string = '';
	export let ref: HTMLInputElement;

	const enter = () => dispatch('enter');
</script>

<input
	class="input border-none"
	type="password"
	name="password"
	{placeholder}
	bind:value
	on:keyup={(event) => event.key === 'Enter' && enter()}
	bind:this={ref}
/>
