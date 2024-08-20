<script lang="ts">
	import IconLoading from '~icons/mdi/loading';
	import { createEventDispatcher } from 'svelte';
	import PawSvg from '../images/PawSvg.svelte';
	import { isLoadingState } from '$lib/store';

	export let secondary: boolean = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

{#if $isLoadingState}
	<button
		type="button"
		class="btn-icon btn-icon-xl shadow-xl variant-filled-primary animate-spin text-white"
		on:click={click}
	>
		<IconLoading />
	</button>
{:else if secondary}
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
