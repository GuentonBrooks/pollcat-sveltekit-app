<script>
	import { createEventDispatcher } from "svelte";
  import IconPlusBox from "~icons/mdi/plus-box";

  const dispatch = createEventDispatcher();
  const click = () => dispatch('click');
</script>

<button type="button" class="btn btn-lg variant-filled-primary w-full" on:click={click}>
  <IconPlusBox />
  <span>New Poll</span>
</button>