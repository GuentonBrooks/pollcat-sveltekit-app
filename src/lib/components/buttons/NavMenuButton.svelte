<script>
	import { createEventDispatcher } from 'svelte';
	import IconMenu from '~icons/mdi/menu';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon btn-icon-lg hover:animate-pulse" on:click={click}>
	<IconMenu />
</button>
