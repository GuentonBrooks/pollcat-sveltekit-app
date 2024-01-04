<script>
	import { createEventDispatcher } from "svelte";
  import IconUserSupervisor from "~icons/mdi/user-supervisor";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconUserSupervisor />
</button>