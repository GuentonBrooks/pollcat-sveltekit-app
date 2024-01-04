<script>
	import { createEventDispatcher } from "svelte";
  import IconBracket from "~icons/mdi/tournament";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconBracket />
</button>