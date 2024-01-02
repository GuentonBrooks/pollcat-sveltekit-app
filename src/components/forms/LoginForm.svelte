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

  let username = '';
  let password = '';

  let usernameRef: HTMLInputElement;
  let passwordRef: HTMLInputElement;

  onMount(() => usernameRef.focus())

  const login = () => {
    const loginFormat = { identifier: username, password };
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


<div class="grid grid-cols-1 gap-10 mb-20 w-72">
  <div class="mb-10">
    <FormHeader label="Hi There Cat!" subLabel="Please log in to continue" />
  </div>

  <TextInput label="Username/Email" bind:value={username} bind:ref={usernameRef} on:enter={() => passwordRef.focus()} />
  <div>
    <PasswordInput label="Password" bind:value={password} bind:ref={passwordRef} on:enter={() => login()} />
    <p class="text-sm flex mt-1">
      <span class="flex-1"/>
      <a class="link link-hover" href="/auth/forgot">Forgot Password?</a>
    </p>
  </div>

  <div class="text-center mt-8">
    <LoginButton on:click={login} />
  </div>
</div>
