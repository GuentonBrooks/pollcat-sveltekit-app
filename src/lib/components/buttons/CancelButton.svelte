<script>
	import { createEventDispatcher } from 'svelte';
	import IconClose from '~icons/mdi/close';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-glass-tertiary" on:click={click}>
	<IconClose />
	<span>Cancel</span>
</button>
