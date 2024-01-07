<script>
	import Title from '$lib/components/content/Title.svelte';
	import PollCatSvgLarge from '$lib/components/images/PollCatSvgLarge.svelte';
	import GetStartedButton from '$lib/components/buttons/GetStartedButton.svelte';

	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { gotoHomePage, gotoLoginPage } from '$lib/navigate';
	import { auth, setFirebaseUserState } from '$lib/firebase/auth';

	onMount(() =>
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setFirebaseUserState();
				gotoHomePage();
			}
		})
	);
</script>

<div class="h-full grid grid-cols-1 my-5 gap-20 justify-items-center content-center">
	<Title />
	<PollCatSvgLarge />
	<GetStartedButton on:click={gotoLoginPage} />
</div>
