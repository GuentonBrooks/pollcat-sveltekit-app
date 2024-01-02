<script lang="ts">
	import { gotoHomePage } from "$lib/navigate";

	// import FlatAlert from "../containers/FlatAlert.svelte";
	import LoginButton from "../buttons/LoginButton.svelte";

  // import isValidLoginFormat from "../../services/auth/isValidLoginFormat";
	// import loginAsync from "../../services/auth/loginAsync";
	import TextInput from "../inputs/TextInput.svelte";
	import { onMount } from "svelte";
	import PasswordInput from "../inputs/PasswordInput.svelte";
	import FormHeader from "../text/FormHeader.svelte";
	import FormFooter from "../text/FormFooter.svelte";
	import SignupButton from "../buttons/SignupButton.svelte";

  let email = '';
  let password = '';
  let passwordConfirm = '';

  let emailRef: HTMLInputElement;
  let passwordRef: HTMLInputElement;
  let passwordConfirmRef: HTMLInputElement;

  onMount(() => emailRef.focus())

  const signup = () => {
    const loginFormat = { identifier: email, password };
    // if (!isValidLoginFormat(loginFormat)) return;

    // loginAsync(loginFormat).then((response) => {
    //   if (!response) return;
    //   const user = response.user;

    //   if (!user.confirmed) return gotoPasswordResetPage();
    //   if (user.role.name === "CLIENT") return gotoUserPageById(user.id);
      
      gotoHomePage();
    // })
  };
</script>


<div class="grid grid-cols-1 gap-8 mb-20 w-88 justify-items-center">
  <div class="mb-10">
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

  <div class="mt-8">
    <FormFooter label="No Kitten Account?" subLabel="Sign Up" href="/auth/signup"/>
  </div>
</div>
