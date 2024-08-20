<script lang="ts">
	import IconLoading from '~icons/mdi/loading';
	import IconMenu from '~icons/mdi/menu';
	import { createEventDispatcher } from 'svelte';
	import { isLoadingState } from '$lib/store';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

{#if $isLoadingState}
	<button type="button" class="btn-icon btn-icon-lg text-surface-50 animate-spin" on:click={click}>
		<IconLoading />
	</button>
{:else}
	<button
		type="button"
		class="btn-icon btn-icon-lg text-surface-50 hover:animate-pulse"
		on:click={click}
	>
		<IconMenu />
	</button>
{/if}
