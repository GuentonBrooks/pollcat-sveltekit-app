<script>
	import { createEventDispatcher } from 'svelte';
	import IconPlay from '~icons/mdi/play';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-filled-primary" on:click={click}>
	<IconPlay />
	<span>Get Started</span>
</button>
