<script>
	import { createEventDispatcher } from 'svelte';
	import IconLogin from '~icons/mdi/login';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-filled-primary" on:click={click}>
	<IconLogin />
	<span>Login</span>
</button>
