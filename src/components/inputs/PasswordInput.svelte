<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let label: string = "";
  export let placeholder: string = "";
  export let value: string = "";
  export let ref: HTMLInputElement;

  const enter = () => dispatch('enter');
</script>

<div class="flex-1 flex-col">
  <p class="text-sm">{label}</p>
  <input 
    class="input input-bordered text-onSurface w-full max-w-xs" 
    type="password" 
    name={label}
    placeholder={placeholder || label}
    bind:value
    on:keyup={(event) => event.key === 'Enter' && enter()}
    bind:this={ref}
  />
</div>