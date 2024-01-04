<script>
	import { createEventDispatcher } from "svelte";
  import IconScore from "~icons/mdi/scoreboard";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconScore />
</button>