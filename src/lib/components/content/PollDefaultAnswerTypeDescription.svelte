<script>
	import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
	import UsersFab from "../buttons/UsersFab.svelte";
	import RepeatFab from "../buttons/RepeatFab.svelte";
	import ManualFab from "../buttons/ManualFab.svelte";
</script>

<Accordion>
	<AccordionItem>
		<svelte:fragment slot="lead"><UsersFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is Select From Employees?</svelte:fragment>
		<svelte:fragment slot="content">This automatically sets the answer options for each poll question to be from the list of Employees known to the system</svelte:fragment>
	</AccordionItem>

	<AccordionItem>
		<svelte:fragment slot="lead"><RepeatFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is Same Answers?</svelte:fragment>
		<svelte:fragment slot="content">Same Answers means that you set the list of answer options at the beginning of the Poll and they will be used for every question added to the poll</svelte:fragment>
	</AccordionItem>
  
	<AccordionItem>
		<svelte:fragment slot="lead"><ManualFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is Manual Input?</svelte:fragment>
		<svelte:fragment slot="content">The Manual input option means that for every question you add to the poll you have to additionally add its answer options individually</svelte:fragment>
	</AccordionItem>
</Accordion>