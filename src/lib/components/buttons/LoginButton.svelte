<script>
	import { createEventDispatcher } from 'svelte';
	import IconLogin from '~icons/mdi/login';
	import PawButton from './PawButton.svelte';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<div class="flex items-center">
	<div class="-mr-8">
		<PawButton on:click={click} />
	</div>
	<button
		type="button"
		class="btn w-60 bg-gradient-to-r variant-gradient-primary-secondary"
		on:click={click}
	>
		<span>Login</span>
		<IconLogin />
	</button>
</div>
