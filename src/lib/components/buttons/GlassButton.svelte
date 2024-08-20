<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');

	export let label = 'Submit';
</script>

<button type="button" class="btn variant-glass" on:click={click}>
	<slot />
	<span>{label}</span>
</button>
