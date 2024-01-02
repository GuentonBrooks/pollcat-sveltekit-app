<script lang="ts">

  export let label: string = "";
  export let subLabel: string = "";
</script>

<div class="grid grid-cols-1 justify-items-center">
  <p class="h1 font-bold text-primary-500">{label}</p>
  <p class="text-sm text-tertiary-700">{subLabel}</p>
</div>