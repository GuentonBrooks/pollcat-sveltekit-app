<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let label = 'Submit';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<button type="button" class="btn variant-filled-primary" on:click={click}>
	<slot />
	<span>{label}</span>
</button>
