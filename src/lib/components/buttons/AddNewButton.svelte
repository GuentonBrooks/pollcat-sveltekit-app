<script>
	import { createEventDispatcher } from 'svelte';
	import IconPlus from '~icons/mdi/plus';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-filled-primary w-full" on:click={click}>
	<IconPlus />
	<span>Add New</span>
</button>
