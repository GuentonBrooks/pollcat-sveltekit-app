<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl">{"<PollCat />"}</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- Link Buttons -->
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/GuentonBrooks/pollcat-sveltekit-app"
					target="_blank"
					rel="noreferrer">
					GitHub
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/admin"
					rel="noreferrer">
					Admin
				</a>

				<!-- Light/Dark Switch -->
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
