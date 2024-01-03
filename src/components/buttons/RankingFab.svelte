<script>
	import { createEventDispatcher } from "svelte";
  import IconRank from "~icons/mdi/counter";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconRank />
</button>