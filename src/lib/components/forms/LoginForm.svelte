<script lang="ts">
	import { authForgotPage, authSignupPage, gotoHomePage } from "$lib/navigate";

	import FlatAlert from "../text/FlatAlert.svelte";
	import LoginButton from "../buttons/LoginButton.svelte";

	import TextInput from "../inputs/TextInput.svelte";
	import { onMount } from "svelte";
	import PasswordInput from "../inputs/PasswordInput.svelte";
	import FormHeader from "../text/FormHeader.svelte";
	import FormFooter from "../text/FormFooter.svelte";
	import isValidLoginFormat from "$lib/validation/auth/isValidLoginFormat";
	import { firebasePasswordSignIn } from "$lib/firebase/auth";

  let email = '';
  let password = '';

  let emailRef: HTMLInputElement;
  let passwordRef: HTMLInputElement;

  onMount(() => emailRef.focus())

  const login = () => {
    const loginFormat = { email, password };
    if (!isValidLoginFormat(loginFormat)) return;

    firebasePasswordSignIn(email, password).then(() => gotoHomePage()).catch(() => null);
  };
</script>


<div class="grid grid-cols-1 gap-8 mb-20 w-88 justify-items-center">
  <div class="my-10">
    <FormHeader label="Hi There Cat!" subLabel="Please log in to continue" />
  </div>

  <div class="w-80">
    <TextInput label="Email" bind:value={email} bind:ref={emailRef} on:enter={() => passwordRef.focus()} />
  </div>

  <div class="w-80">
    <PasswordInput label="Password" bind:value={password} bind:ref={passwordRef} on:enter={() => login()} />
    <p class="text-sm flex mt-1 mr-3">
      <span class="flex-1"/>
      <a class="text-secondary-500 link link-hover" href={authForgotPage}>Forgot Password?</a>
    </p>
  </div>

  <div class="text-center mt-8">
    <LoginButton on:click={login} />
  </div>

  <FlatAlert />

  <div class="mt-8">
    <FormFooter label="No Kitten Account?" subLabel="Sign Up" href={authSignupPage} />
  </div>
</div>
