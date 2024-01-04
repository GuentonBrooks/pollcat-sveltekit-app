<script>
	import { createEventDispatcher } from "svelte";
  import IconApproval from "~icons/mdi/file-chart-check";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn-icon" on:click={click}>
  <IconApproval />
</button>