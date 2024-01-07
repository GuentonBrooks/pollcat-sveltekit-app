<script>
	import { createEventDispatcher } from 'svelte';
	import AddNewButton from '../buttons/AddNewButton.svelte';
	import Header from './Header.svelte';

	export let label = '';

	const dispatch = createEventDispatcher();
	const click = () => dispatch('click');
</script>

<div class="col-span-10 md:col-span-6 xl:col-span-8">
	<Header {label} />
</div>
<div class="col-span-10 md:col-span-4 xl:col-span-2">
	<AddNewButton on:click={click} />
</div>
