<script>
	import { createEventDispatcher } from 'svelte';
	import IconEdit from '~icons/mdi/edit';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon btn-icon-sm variant-filled-tertiary" on:click={click}>
	<IconEdit />
</button>
