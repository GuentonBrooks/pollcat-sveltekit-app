<script lang="ts">
	import { authLoginPage, gotoLoginPage } from "$lib/navigate";

	import FlatAlert from "../text/FlatAlert.svelte";
	import LoginResetButton from "../buttons/LoginResetButton.svelte";

	import TextInput from "../inputs/TextInput.svelte";
	import { onMount } from "svelte";
	import FormHeader from "../text/FormHeader.svelte";
	import FormFooter from "../text/FormFooter.svelte";
	import { firebaseSendPasswordResetEmail } from "$lib/firebase/auth";
	import isValidEmailFormat from "../../services/auth/isValidEmailFormat";
	import { alertTextState, alertTypeState } from "../../store/alert";

  let email = '';

  let emailRef: HTMLInputElement;

  onMount(() => {
    emailRef.focus();
    alertTypeState.set('info');
		alertTextState.set('Be Warned! Reset Emails will usually end up in your spam folder!');
  })

  const requestReset = () => {
    if (!isValidEmailFormat(email)) return;

    firebaseSendPasswordResetEmail(email).then(() => gotoLoginPage()).catch(() => null);
  };
</script>


<div class="grid grid-cols-1 gap-8 mb-20 w-88 justify-items-center">
  <div class="my-10">
    <FormHeader label="Password Reset" subLabel="Enter your Email to continue" />
  </div>

  <div class="w-80">
    <TextInput label="Email" bind:value={email} bind:ref={emailRef} on:enter={requestReset} />
  </div>

  <div class="text-center mt-8">
    <LoginResetButton on:click={requestReset} />
  </div>

  <FlatAlert />

  <div class="mt-8">
    <FormFooter label="Remember your Password?" subLabel="Log In" href={authLoginPage} />
  </div>
</div>
