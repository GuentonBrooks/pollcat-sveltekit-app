<script lang="ts">
	import SignupButton from '$lib/components/buttons/SignupButton.svelte';
	import AuthContainer from '$lib/components/containers/AuthContainer.svelte';
	import EmailInput from '$lib/components/inputs/EmailInput.svelte';
	import PasswordInput from '$lib/components/inputs/PasswordInput.svelte';

	import { onMount } from 'svelte';
	import { firebasePasswordSignUp } from '$lib/firebase/auth';
	import { authLoginPage, homePage } from '$lib/pages';
	import isValidSignupFormat from '$lib/validation/auth/isValidSignupFormat';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let passwordConfirm = '';

	let emailRef: HTMLInputElement;
	let passwordRef: HTMLInputElement;
	let passwordConfirmRef: HTMLInputElement;

	onMount(() => emailRef.focus());

	const signup = () => {
		const signupFormat = { email, password, passwordConfirm };
		if (!isValidSignupFormat(signupFormat)) return;

		firebasePasswordSignUp(email, password).then(() => goto(homePage).catch(() => null));
	};
</script>

<AuthContainer
	headerLabel="Create a Kitten Account"
	headerSubLabel="Sign Up to get started"
	footerLabel="Already a Cat"
	footerSubLabel="Log In"
	footerHref={authLoginPage}
>
	<div class="w-80">
		<EmailInput bind:value={email} bind:ref={emailRef} on:enter={() => passwordRef.focus()} />
	</div>

	<div class="w-80">
		<PasswordInput
			bind:value={password}
			bind:ref={passwordRef}
			on:enter={() => passwordConfirmRef.focus()}
		/>
	</div>

	<div class="w-80">
		<PasswordInput
			placeholder="Confirm Password"
			bind:value={passwordConfirm}
			bind:ref={passwordConfirmRef}
			on:enter={() => signup()}
		/>
	</div>

	<div class="text-center mt-8">
		<SignupButton on:click={signup} />
	</div>
</AuthContainer>
