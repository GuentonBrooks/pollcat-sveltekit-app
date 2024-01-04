<script lang="ts">

  export let label: string = "";
  export let subLabel: string = "";
  export let href: string = "";
</script>

<div class="flex gap-2 justify-center">
  <p class="text-sm text-tertiary-700">{label}</p>

  {#if href}
    <a class="text-sm font-bold text-secondary-500" {href}>{subLabel}</a>
  {:else}
    <p class="text-sm font-bold text-secondary-500 link link-hover">{subLabel}</p>
  {/if}
</div>