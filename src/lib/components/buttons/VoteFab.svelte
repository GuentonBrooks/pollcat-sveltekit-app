<script>
	import { createEventDispatcher } from "svelte";
  import IconVote from "~icons/mdi/vote";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconVote />
</button>