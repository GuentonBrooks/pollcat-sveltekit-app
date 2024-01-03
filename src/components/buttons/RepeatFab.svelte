<script>
	import { createEventDispatcher } from "svelte";
  import IconRepeat from "~icons/mdi/repeat";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconRepeat />
</button>