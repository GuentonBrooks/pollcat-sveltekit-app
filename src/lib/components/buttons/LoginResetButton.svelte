<script>
	import { createEventDispatcher } from 'svelte';
	import IconLockReset from '~icons/mdi/lock-reset';
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
		class="btn w-60 bg-gradient-to-r variant-gradient-primary-tertiary"
		on:click={click}
	>
		<span>Reset</span>
		<IconLockReset />
	</button>
</div>
