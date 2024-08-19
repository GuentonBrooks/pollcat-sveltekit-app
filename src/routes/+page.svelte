<script>
	import Title from '$lib/components/content/Title.svelte';
	import PollCatSvgLarge from '$lib/components/images/PollCatSvgLarge.svelte';
	import PawButton from '$lib/components/buttons/PawButton.svelte';

	import { authLoginPage } from '$utils/pages';
	import { goto } from '$app/navigation';
</script>

<div class="h-full grid grid-cols-1 my-5 gap-20 justify-items-center content-center">
	<Title />
	<PollCatSvgLarge />
	<PawButton on:click={() => goto(authLoginPage)} />
</div>
