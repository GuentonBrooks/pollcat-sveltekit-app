<script>
	import { createEventDispatcher } from 'svelte';
	import PawButton from './PawButton.svelte';

	export let label = 'Submit';

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
		<span>{label}</span>
		<slot />
	</button>
</div>
