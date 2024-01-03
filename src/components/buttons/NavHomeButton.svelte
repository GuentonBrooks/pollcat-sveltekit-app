<script>
	import { createEventDispatcher } from "svelte";
  import IconHome from "~icons/mdi/home";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconHome />
</button>