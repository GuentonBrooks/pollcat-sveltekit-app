<script>
	import { createEventDispatcher } from "svelte";
  import IconLoginVariant from "~icons/mdi/login-variant";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button class="btn variant-filled-primary" on:click={click}>
  <IconLoginVariant />
  <span>Signup</span>
</button>