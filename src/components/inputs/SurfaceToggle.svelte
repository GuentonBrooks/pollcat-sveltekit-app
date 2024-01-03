<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';

  export let value: boolean;
</script>

<div class="w-full flex gap-3 mx-5">
  <h4 class="h4 font-bold">No</h4>
  <SlideToggle name="slide" active="bg-secondary-500" bind:checked={value} />
  <h4 class="h4 font-bold text-secondary-500">Yes</h4>
</div>