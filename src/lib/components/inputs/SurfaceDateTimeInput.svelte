<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let label: string = "";
  export let name: string = "";
  export let placeholder: string = "";
  export let value: string = "";
  export let ref: HTMLInputElement;

  const enter = () => dispatch('enter');
</script>

<p class="text-sm ml-3 text-tertiary-500">{label}</p>
<input 
  class="input border-none" 
  type="datetime-local" 
  name={name || label}
  placeholder={placeholder || label}
  bind:value
  on:keyup={(event) => event.key === 'Enter' && enter()}
  bind:this={ref}
/>