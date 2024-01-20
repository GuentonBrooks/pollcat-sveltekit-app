<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import PawSvg from '../images/PawSvg.svelte';

	export let secondary: boolean = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

{#if secondary}
	<button
		type="button"
		class="btn-icon btn-icon-xl shadow-xl variant-filled-secondary"
		on:click={click}
	>
		<PawSvg />
	</button>
{:else}
	<button
		type="button"
		class="btn-icon shadow-xl btn-icon-xl variant-filled-primary"
		on:click={click}
	>
		<PawSvg />
	</button>
{/if}
