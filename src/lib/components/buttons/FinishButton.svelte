<script>
	import { createEventDispatcher } from 'svelte';
	import IconCheck from '~icons/mdi/check';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-filled-primary" on:click={click}>
	<IconCheck />
	<span>Finish</span>
</button>
