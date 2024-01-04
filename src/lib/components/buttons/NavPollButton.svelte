<script>
	import { createEventDispatcher } from "svelte";
  import IconPoll from "~icons/mdi/poll";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconPoll />
</button>