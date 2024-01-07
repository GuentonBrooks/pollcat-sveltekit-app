<script>
	import PollCatSvgLarge from '$lib/components/images/PollCatSvgLarge.svelte';
	import Title from '$lib/components/content/Title.svelte';

	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { authLoginPage, gotoHomePage } from '$lib/navigate';
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

	<!-- Get Started Button -->
	<a class="btn variant-filled-primary" href={authLoginPage} rel="noreferrer"> Get Started </a>
</div>
