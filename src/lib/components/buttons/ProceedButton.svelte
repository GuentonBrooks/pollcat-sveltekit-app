<script>
	import { createEventDispatcher } from 'svelte';
	import IconFastForward from '~icons/mdi/fast-forward';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-filled-primary" on:click={click}>
	<IconFastForward />
	<span>Proceed</span>
</button>
