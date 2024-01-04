<script lang="ts">
	import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
	import type { PollType } from "$lib/types/poll";

	import VoteFab from "../buttons/VoteFab.svelte";
	import ApprovalFab from "../buttons/ApprovalFab.svelte";
	import ScoreFab from "../buttons/ScoreFab.svelte";
	import RankingFab from "../buttons/RankingFab.svelte";
	import BracketFab from "../buttons/BracketFab.svelte";

  export let value: PollType;
</script>

<ListBox active="variant-filled-secondary">
  <ListBoxItem bind:group={value} name="medium" value="vote">
    <svelte:fragment slot="lead"><VoteFab /></svelte:fragment>
    Vote
  </ListBoxItem>
  
  <ListBoxItem bind:group={value} name="medium" value="approval">
  <svelte:fragment slot="lead"><ApprovalFab /></svelte:fragment>
    Approval
  </ListBoxItem>
  
  <ListBoxItem bind:group={value} name="medium" value="score">
    <svelte:fragment slot="lead"><ScoreFab /></svelte:fragment>
    Score
  </ListBoxItem>
  
  <ListBoxItem bind:group={value} name="medium" value="ranking">
    <svelte:fragment slot="lead"><RankingFab /></svelte:fragment>
    Ranking
  </ListBoxItem>
  
  <ListBoxItem bind:group={value} name="medium" value="bracket">
    <svelte:fragment slot="lead"><BracketFab /></svelte:fragment>
    Bracket
  </ListBoxItem>
</ListBox>