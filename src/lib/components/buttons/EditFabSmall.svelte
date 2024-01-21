<script>
	import { createEventDispatcher } from 'svelte';
	import IconEdit from '~icons/mdi/edit';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-soft-secondary shadow rounded-lg" on:click={click}>
	<IconEdit />
</button>
