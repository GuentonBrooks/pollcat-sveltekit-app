<script lang="ts">
	import LoginButton from '$lib/components/buttons/LoginButton.svelte';
	import AuthContainer from '$lib/components/containers/AuthContainer.svelte';
	import EmailInput from '$lib/components/inputs/EmailInput.svelte';
	import PasswordInput from '$lib/components/inputs/PasswordInput.svelte';

	import { onMount } from 'svelte';
	import { firebaseAdminSignIn } from '$lib/firebase/auth';
	import { adminPage, authForgotPage, authLoginPage } from '$lib/pages';
	import isValidLoginFormat from '$lib/validation/auth/isValidLoginFormat';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';

	let emailRef: HTMLInputElement;
	let passwordRef: HTMLInputElement;

	onMount(() => emailRef.focus());

	const login = () => {
		const loginFormat = { email, password };
		if (!isValidLoginFormat(loginFormat)) return;

		firebaseAdminSignIn(email, password)
			.then(() => goto(adminPage))
			.catch(() => null);
	};
</script>

<AuthContainer
	headerLabel="Administrator Login"
	headerSubLabel="Admins-Only Access"
	footerLabel="Not an Admin?"
	footerSubLabel="Normal Login"
	footerHref={authLoginPage}
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
