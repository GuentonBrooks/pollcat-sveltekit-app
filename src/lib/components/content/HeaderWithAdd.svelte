<script>
	import { createEventDispatcher } from 'svelte';
	import AddNewButton from '../buttons/AddNewButton.svelte';
	import Header from './Header.svelte';

	export let label = '';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<div class="col-span-8 md:col-span-6 xl:col-span-7 mb-3">
	<Header {label} />
</div>
<div class="col-span-8 md:col-span-2 xl:col-span-1 mb-12">
	<AddNewButton on:click={click} />
</div>
