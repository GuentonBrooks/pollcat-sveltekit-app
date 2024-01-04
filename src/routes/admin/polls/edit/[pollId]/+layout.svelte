<script lang="ts">
  import { page } from '$app/stores';
	import { watchPollById } from '$lib/firebase/polls';
	import { onDestroy, onMount } from 'svelte';
  
  let unWatchPoll = () => {};

  onMount(() => unWatchPoll = watchPollById($page.params.pollId));
  onDestroy(() => unWatchPoll());
</script>

<slot />