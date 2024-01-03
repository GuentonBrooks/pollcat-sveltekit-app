<script lang="ts">
	import SurfaceContainer from './../../../../components/containers/SurfaceContainer.svelte';
	import FormHeader from './../../../../components/text/FormHeader.svelte';
	import SelectPollType from '../../../../components/inputs/SelectPollType.svelte';
	import PollTypeDescription from '../../../../components/text/PollTypeDescription.svelte';
	import SurfaceHeader from '../../../../components/text/SurfaceHeader.svelte';
	import SurfaceTextInput from '../../../../components/inputs/SurfaceTextInput.svelte';
	import SelectPollDefaultAnswerType from '../../../../components/inputs/SelectPollDefaultAnswerType.svelte';
	import PollDefaultAnswerTypeDescription from '../../../../components/text/PollDefaultAnswerTypeDescription.svelte';
	import CancelButton from '../../../../components/buttons/CancelButton.svelte';
	import SubmitButton from '../../../../components/buttons/SubmitButton.svelte';

	import type { PollDefaultAnswerType, PollType } from '../../../../types/poll';
	import SurfaceDateTimeInput from '../../../../components/inputs/SurfaceDateTimeInput.svelte';

  let pollName = '';
  let pollNameRef: HTMLInputElement;

  let pollType: PollType = "vote";
  let pollDefaultAnswerType: PollDefaultAnswerType = "employee";
  let openingDate = '';
  let openingDateRef: HTMLInputElement;
  let closingDate = '';
  let closingDateRef: HTMLInputElement;
</script>

<div class="grid grid-cols-10 my-10 mx-5 gap-10">
  <div class="col-span-10">
    <FormHeader label="Create New Poll" />
  </div>

  <!-- Poll Name Input -->
  <div class="col-span-10 md:col-span-8 md:col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4">
    <SurfaceContainer>
      <SurfaceHeader label="Enter Poll Name" />
      <SurfaceTextInput bind:value={pollName} bind:ref={pollNameRef} placeholder="Poll Name" />
    </SurfaceContainer>
  </div>

  <!-- Poll Type Selection -->
  <div class="col-span-10 md:col-span-5 xl:col-span-5">
    <SurfaceContainer>
      <SurfaceHeader label="Select Poll Type" />
      <SelectPollType value={pollType} />
    </SurfaceContainer>
  </div>
  <div class="hidden md:block md:col-span-5">
    <SurfaceContainer>
      <SurfaceHeader label="Poll Type Descriptions" />
      <PollTypeDescription />
    </SurfaceContainer>
  </div>

  <!-- Default Answer Type Selection -->
  <div class="col-span-10 md:col-span-5 xl:col-span-5">
    <SurfaceContainer>
      <SurfaceHeader label="Select Default Answer Model" />
      <SelectPollDefaultAnswerType value={pollDefaultAnswerType} />
    </SurfaceContainer>
  </div>
  <div class="hidden md:block md:col-span-5">
    <SurfaceContainer>
      <SurfaceHeader label="Poll Default Answer Descriptions" />
      <PollDefaultAnswerTypeDescription />
    </SurfaceContainer>
  </div>

  <!-- Automatic Open/Close Date Selection -->
  <div class="col-span-10 md:col-span-5">
    <SurfaceContainer>
      <SurfaceHeader label="Select Opening Date" />
      <SurfaceDateTimeInput bind:value={openingDate} bind:ref={openingDateRef} placeholder="Opening Date" />
    </SurfaceContainer>
  </div>
  <div class="col-span-10 md:col-span-5">
    <SurfaceContainer>
      <SurfaceHeader label="Select Closing Date" />
      <SurfaceDateTimeInput bind:value={closingDate} bind:ref={closingDateRef} placeholder="Closing Date" />
    </SurfaceContainer>
  </div>

  <div class="col-span-10 place-self-stretch grid grid-cols-2 place-items-center">
    <CancelButton />
    <SubmitButton />
  </div>
</div>
