<script>
	import { createEventDispatcher } from 'svelte';
	import IconLockReset from '~icons/mdi/lock-reset';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-filled-primary" on:click={click}>
	<IconLockReset />
	<span>Reset</span>
</button>
