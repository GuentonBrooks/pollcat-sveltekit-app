<script lang="ts">
	import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
	import type { PollDefaultAnswerType } from "../../types/poll";

	import RepeatFab from "../buttons/RepeatFab.svelte";
	import ManualFab from "../buttons/ManualFab.svelte";
	import UsersFab from "../buttons/UsersFab.svelte";

  export let value: PollDefaultAnswerType;
</script>

<ListBox active="variant-filled-secondary">
  <ListBoxItem bind:group={value} name="medium" value="employee">
    <svelte:fragment slot="lead"><UsersFab /></svelte:fragment>
    Select From Employees
  </ListBoxItem>
  
  <ListBoxItem bind:group={value} name="medium" value="same">
  <svelte:fragment slot="lead"><RepeatFab /></svelte:fragment>
    Same Answers
  </ListBoxItem>
  
  <ListBoxItem bind:group={value} name="medium" value="manual">
    <svelte:fragment slot="lead"><ManualFab /></svelte:fragment>
    Manual Input
  </ListBoxItem>
</ListBox>