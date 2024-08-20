<script lang="ts">
	import AuthContainer from '$lib/components/containers/AuthContainer.svelte';
	import EmailInput from '$lib/components/inputs/EmailInput.svelte';
	import PasswordInput from '$lib/components/inputs/PasswordInput.svelte';

	import { onMount } from 'svelte';
	import isValidLoginFormat from '$lib/validation/auth/isValidLoginFormat';
	import {
		fetchFirebaseUserInfo,
		firebasePasswordSignIn,
		storeFirebaseUserAsync,
	} from '$lib/firebase/auth';
	import { authForgotPage, authSignupPage, homePage } from '$utils/pages';
	import PawButton from '$lib/components/buttons/PawButton.svelte';
	import { goto } from '$app/navigation';
	import { isLoadingState } from '$lib/store';

	let email = '';
	let password = '';

	let emailRef: HTMLInputElement;
	let passwordRef: HTMLInputElement;

	onMount(() => emailRef.focus());

	const login = () => {
		const loginFormat = { email, password };
		if (!isValidLoginFormat(loginFormat)) return;

		isLoadingState.set(true);
		firebasePasswordSignIn(email, password)
			.then(() => fetchFirebaseUserInfo())
			.then((userInfo) => {
				if (!userInfo) return storeFirebaseUserAsync();
				else return goto(homePage);
			})
			.then(() => goto(homePage))
			.catch(() => {})
			.finally(() => isLoadingState.set(false));
	};
</script>

<AuthContainer
	headerLabel="Hi There Cat!"
	headerSubLabel="Please log in to continue"
	footerLabel="No Kitten Account?"
	footerSubLabel="Sign Up"
	footerHref={authSignupPage}
>
	<div class="w-80">
		<EmailInput bind:value={email} bind:ref={emailRef} on:enter={() => passwordRef.focus()} />
	</div>

	<div class="w-80">
		<PasswordInput bind:value={password} bind:ref={passwordRef} on:enter={() => login()} />
		<p class="text-sm flex mt-1 mr-3">
			<span class="flex-1" />
			<a class="anchor" href={authForgotPage}>Forgot Password?</a>
		</p>
	</div>

	<div class="text-center mt-8">
		<!-- <LoginButton on:click={login} /> -->
		<PawButton secondary on:click={login} />
	</div>
</AuthContainer>
