<script>

	import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
	import VoteFab from "../buttons/VoteFab.svelte";
	import ApprovalFab from "../buttons/ApprovalFab.svelte";
	import ScoreFab from "../buttons/ScoreFab.svelte";
	import RankingFab from "../buttons/RankingFab.svelte";
	import BracketFab from "../buttons/BracketFab.svelte";

</script>

<Accordion>
	<AccordionItem>
		<svelte:fragment slot="lead"><VoteFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is a Vote Poll?</svelte:fragment>
		<svelte:fragment slot="content">A vote poll is a standard poll where you can only select <strong>ONE</strong> answer per question from the available answers</svelte:fragment>
	</AccordionItem>

	<AccordionItem>
		<svelte:fragment slot="lead"><ApprovalFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is an Approval Poll?</svelte:fragment>
		<svelte:fragment slot="content">An approval poll is a poll where you can select <strong>MULTIPLE</strong> answers per question from the available answers</svelte:fragment>
	</AccordionItem>
  
	<AccordionItem>
		<svelte:fragment slot="lead"><ScoreFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is a Score Poll?</svelte:fragment>
		<svelte:fragment slot="content">A vote poll is a poll where you select a score from <strong>1 to 5</strong> for every question available</svelte:fragment>
	</AccordionItem>

	<AccordionItem>
		<svelte:fragment slot="lead"><RankingFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is a Ranking Poll?</svelte:fragment>
		<svelte:fragment slot="content">A vote poll is a poll where you have to <strong>rank every option</strong> in the order of your preference</svelte:fragment>
	</AccordionItem>

	<AccordionItem>
		<svelte:fragment slot="lead"><BracketFab /></svelte:fragment>
		<svelte:fragment slot="summary">What is a Bracket Poll?</svelte:fragment>
		<svelte:fragment slot="content">A bracket poll is a poll where you get <strong>2 options</strong> per question and the next question is a continuation of the preceding question</svelte:fragment>
	</AccordionItem>
</Accordion>