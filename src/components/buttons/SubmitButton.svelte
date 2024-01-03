<script>
	import { createEventDispatcher } from "svelte";
  import IconCheck from "~icons/mdi/check";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button class="btn variant-filled-primary" on:click={click}>
  <IconCheck />
  <span>Submit</span>
</button>