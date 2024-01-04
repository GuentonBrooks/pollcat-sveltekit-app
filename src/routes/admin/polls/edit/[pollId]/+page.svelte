<script lang="ts">
	import { selectedPollState } from '$lib/store/poll';
  
</script>

<div class="h-full grid place-content-center">
	PollID Page: {$selectedPollState.name}
</div>