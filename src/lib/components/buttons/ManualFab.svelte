<script>
	import { createEventDispatcher } from "svelte";
  import IconManualEdit from "~icons/mdi/text-box-edit";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconManualEdit />
</button>