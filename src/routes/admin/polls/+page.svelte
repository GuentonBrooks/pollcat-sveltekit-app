<script>
	import TenColGridContainer from '$lib/components/containers/TenColGridContainer.svelte';
	import HeaderWithAdd from '$lib/components/content/HeaderWithAdd.svelte';
	import navigate, { adminPollsAddPage } from '$lib/navigate';
</script>

<TenColGridContainer>
	<HeaderWithAdd label="Polls" on:click={() => navigate(adminPollsAddPage)} />
</TenColGridContainer>
