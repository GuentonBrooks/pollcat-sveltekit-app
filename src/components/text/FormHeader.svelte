<script lang="ts">

  export let label: string = "";
  export let subLabel: string = "";
</script>

<div class="grid grid-cols-1 justify-items-center">
  <p class="h1 font-bold">{label}</p>
  <p class="text-sm">{subLabel}</p>
</div>