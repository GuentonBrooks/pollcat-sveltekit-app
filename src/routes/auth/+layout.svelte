<script>
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import { authAdminLoginPage } from '$lib/navigate';
	import GuentonLogo from '$lib/components/images/GuentonLogo.svelte';
	import PollCatSvgLarge from '$lib/components/images/PollCatSvgLarge.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl text-primary-900 dark:text-token">{'<PollCat />'}</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- Link Buttons -->
				<a
					class="btn btn-sm variant-soft-primary"
					href="https://github.com/GuentonBrooks/pollcat-sveltekit-app"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
				<a class="btn btn-sm variant-soft-primary" href={authAdminLoginPage} rel="noreferrer">
					Admin
				</a>

				<!-- Light/Dark Switch -->
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<div class="h-full grid grid-cols-1 md:grid-cols-2">
		<div class="hidden md:grid grid-cols-1 justify-items-center content-center">
			<PollCatSvgLarge />
		</div>
		<slot />
	</div>

	<svelte:fragment slot="footer">
		<div class="flex justify-end">
			<div class="w-20">
				<GuentonLogo />
			</div>
		</div>
	</svelte:fragment>
</AppShell>
