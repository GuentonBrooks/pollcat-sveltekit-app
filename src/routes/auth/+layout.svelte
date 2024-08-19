<script>
	import { AppShell } from '@skeletonlabs/skeleton';

	import GuentonLogo from '$lib/components/images/GuentonLogo.svelte';
	import PollCatSvgLarge from '$lib/components/images/PollCatSvgLarge.svelte';
	import AuthAppBar from '$lib/components/content/AuthAppBar.svelte';
</script>

<AppShell>
	<!-- App Bar -->
	<svelte:fragment slot="header">
		<div class="fixed top-0 left-0 right-0">
			<div class="bg-top-texture bg-cover rounded-b-3xl">
				<AuthAppBar />
			</div>
		</div>
	</svelte:fragment>

	<div class="h-full grid grid-cols-1 md:grid-cols-2">
		<div class="hidden md:grid grid-cols-1 justify-items-center content-center">
			<PollCatSvgLarge />
		</div>
		<slot />
	</div>

	<svelte:fragment slot="footer">
		<div class="flex justify-end">
			<div class="w-24">
				<GuentonLogo />
			</div>
		</div>
	</svelte:fragment>
</AppShell>
