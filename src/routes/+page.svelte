<script>
	import Title from '$lib/components/content/Title.svelte';
	import PollCatSvgLarge from '$lib/components/images/PollCatSvgLarge.svelte';
	import PawButton from '$lib/components/buttons/PawButton.svelte';

	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { authLoginPage, homePage } from '$lib/pages';
	import { auth, setFirebaseUserState } from '$lib/firebase/auth';
	import { goto } from '$app/navigation';

	onMount(() =>
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setFirebaseUserState();
				goto(homePage);
			} else {
				goto(authLoginPage);
			}
		})
	);
</script>

<div class="h-full grid grid-cols-1 my-5 gap-20 justify-items-center content-center">
	<Title />
	<PollCatSvgLarge />
	<PawButton on:click={() => goto(authLoginPage)} />
</div>
