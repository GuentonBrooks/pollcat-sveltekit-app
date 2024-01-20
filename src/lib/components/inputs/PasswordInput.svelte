<script lang="ts">
	import IconKey from '~icons/mdi/key-variant';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let placeholder: string = 'Password';
	export let value: string = '';
	export let ref: HTMLInputElement;

	const enter = () => dispatch('enter');
</script>

<div class="input-group border-none grid-cols-[auto_1fr_auto]">
	<div class="text-secondary-500">
		<IconKey />
	</div>
	<input
		class="input border-none"
		type="password"
		name="password"
		{placeholder}
		bind:value
		on:keyup={(event) => event.key === 'Enter' && enter()}
		bind:this={ref}
	/>
</div>
