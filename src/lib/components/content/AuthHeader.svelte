<script lang="ts">
	export let label: string = '';
	export let subLabel: string = '';
</script>

<div class="grid grid-cols-1 justify-items-center">
	<h1 class="h1 font-bold text-primary-500">{label}</h1>
	<p class="text-sm">{subLabel}</p>
</div>
