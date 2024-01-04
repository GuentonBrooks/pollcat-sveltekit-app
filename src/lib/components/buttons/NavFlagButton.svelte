<script>
	import { createEventDispatcher } from "svelte";
  import IconFlag from "~icons/mdi/flag";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconFlag />
</button>