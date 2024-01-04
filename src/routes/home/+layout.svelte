<script>
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	import PollCatSvgSmall from '$lib/components/images/PollCatSvgSmall.svelte';
	import LogoutButton from '$lib/components/buttons/LogoutButton.svelte';
</script>

<AppShell>
  <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
        <div class="hidden md:block">
          <PollCatSvgSmall />
        </div>
				<strong class="text-xl">{"<PollCat />"}</strong>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<LightSwitch />
        <LogoutButton />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

  <slot />

</AppShell>