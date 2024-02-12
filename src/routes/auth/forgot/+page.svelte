<script lang="ts">
	import LoginResetButton from '$lib/components/buttons/LoginResetButton.svelte';
	import AuthContainer from '$lib/components/containers/AuthContainer.svelte';
	import EmailInput from '$lib/components/inputs/EmailInput.svelte';
	import { firebaseSendPasswordResetEmail } from '$lib/firebase/auth';

	import { onMount } from 'svelte';
	import { authLoginPage } from '$lib/pages';
	import { alertTextState, alertTypeState } from '$lib/store/alert';
	import isValidEmailFormat from '$lib/validation/auth/isValidEmailFormat';
	import { goto } from '$app/navigation';

	let email = '';

	let emailRef: HTMLInputElement;

	onMount(() => {
		emailRef.focus();
		alertTypeState.set('info');
		alertTextState.set('Be Warned! Reset Emails will usually end up in your spam folder!');
	});

	const requestReset = () => {
		if (!isValidEmailFormat(email)) return;

		firebaseSendPasswordResetEmail(email)
			.then(() => goto(authLoginPage))
			.catch(() => null);
	};
</script>

<AuthContainer
	headerLabel="Password Reset"
	headerSubLabel="Enter your Email to continue"
	footerLabel="Remember your Password?"
	footerSubLabel="Log In"
	footerHref={authLoginPage}
>
	<div class="w-80">
		<EmailInput bind:value={email} bind:ref={emailRef} on:enter={requestReset} />
	</div>

	<div class="text-center mt-8">
		<LoginResetButton on:click={requestReset} />
	</div>
</AuthContainer>
