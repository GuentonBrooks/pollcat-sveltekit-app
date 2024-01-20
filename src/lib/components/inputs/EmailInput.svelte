<script lang="ts">
	import IconAt from '~icons/mdi/at';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let value: string = '';
	export let ref: HTMLInputElement;

	const enter = () => dispatch('enter');
</script>

<div class="input-group border-none grid-cols-[auto_1fr_auto]">
	<div class="text-secondary-500">
		<IconAt />
	</div>
	<input
		class="input border-none"
		type="email"
		name="email"
		placeholder="Email"
		bind:value
		on:keyup={(event) => event.key === 'Enter' && enter()}
		bind:this={ref}
	/>
</div>
