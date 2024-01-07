<script lang="ts">
	import AuthContainer from '$lib/components/containers/AuthContainer.svelte';
	import EmailInput from '$lib/components/inputs/EmailInput.svelte';
	import PasswordInput from '$lib/components/inputs/PasswordInput.svelte';
	import LoginButton from '$lib/components/buttons/LoginButton.svelte';

	import { onMount } from 'svelte';
	import isValidLoginFormat from '$lib/validation/auth/isValidLoginFormat';
	import { firebasePasswordSignIn } from '$lib/firebase/auth';
	import { authForgotPage, authSignupPage, gotoHomePage } from '$lib/navigate';

	let email = '';
	let password = '';

	let emailRef: HTMLInputElement;
	let passwordRef: HTMLInputElement;

	onMount(() => emailRef.focus());

	const login = () => {
		const loginFormat = { email, password };
		if (!isValidLoginFormat(loginFormat)) return;

		firebasePasswordSignIn(email, password)
			.then(() => gotoHomePage())
			.catch(() => null);
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
		<LoginButton on:click={login} />
	</div>
</AuthContainer>
