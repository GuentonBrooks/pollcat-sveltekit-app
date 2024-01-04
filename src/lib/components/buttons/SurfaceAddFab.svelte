<script>
	import { createEventDispatcher } from "svelte";
  import IconPlus from "~icons/mdi/plus";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon btn-icon-sm variant-filled-secondary" on:click={click}>
  <IconPlus />
</button>