<script lang="ts">
	import { authLoginPage, gotoHomePage } from "$lib/navigate";

	import FlatAlert from "../text/FlatAlert.svelte";
	import SignupButton from "../buttons/SignupButton.svelte";

	// import loginAsync from "$lib/validation/auth/loginAsync";
	import TextInput from "../inputs/TextInput.svelte";
	import { onMount } from "svelte";
	import PasswordInput from "../inputs/PasswordInput.svelte";
	import FormHeader from "../text/FormHeader.svelte";
	import FormFooter from "../text/FormFooter.svelte";
	import isValidSignupFormat from "$lib/validation/auth/isValidSignupFormat";
	import { firebasePasswordSignUp } from "$lib/firebase/auth";

  let email = '';
  let password = '';
  let passwordConfirm = '';

  let emailRef: HTMLInputElement;
  let passwordRef: HTMLInputElement;
  let passwordConfirmRef: HTMLInputElement;

  onMount(() => emailRef.focus())

  const signup = () => {
    const signupFormat = { email, password, passwordConfirm };
    if (!isValidSignupFormat(signupFormat)) return;

    firebasePasswordSignUp(email, password).then(() => gotoHomePage().catch(() => null));
  };
</script>


<div class="grid grid-cols-1 gap-8 mb-20 w-88 justify-items-center">
  <div class="my-10">
    <FormHeader label="Create a Kitten Account" subLabel="Sign Up to get started" />
  </div>

  <div class="w-80">
    <TextInput label="Email" bind:value={email} bind:ref={emailRef} on:enter={() => passwordRef.focus()} />
  </div>

  <div class="w-80">
    <PasswordInput label="Password" bind:value={password} bind:ref={passwordRef} on:enter={() =>passwordConfirmRef.focus()} />
  </div>

  <div class="w-80">
    <PasswordInput label="Confirm Password" bind:value={passwordConfirm} bind:ref={passwordConfirmRef} on:enter={() => signup()} />
  </div>

  <div class="text-center mt-8">
    <SignupButton on:click={signup} />
  </div>

  <div class="flex md:ml-20 justify-center">
    <FlatAlert />
  </div>

  <div class="mt-8">
    <FormFooter label="Already a Cat?" subLabel="Log In" href={authLoginPage} />
  </div>
</div>
