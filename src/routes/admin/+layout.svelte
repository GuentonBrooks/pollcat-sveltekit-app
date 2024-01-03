<script>
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import PollCatSvgSmall from '../../components/images/PollCatSvgSmall.svelte';
	import LogoutButton from '../../components/buttons/LogoutButton.svelte';
	import NavPollButton from '../../components/buttons/NavPollButton.svelte';
	import AdminAppRail from '../../components/navigation/AdminAppRail.svelte';
	import NavHamburgerButton from '../../components/buttons/NavMenuButton.svelte';
	import NavMenuButton from '../../components/buttons/NavMenuButton.svelte';
	import AdminBottomNav from '../../components/navigation/AdminBottomNav.svelte';

  let showNav = false;
</script>

<AppShell>
  <!-- App Bar -->
  <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
        <NavMenuButton on:click={() => showNav = !showNav} />
				<strong class="text-xl ml-3">Administration Console</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />

        <LogoutButton />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

  <!-- Nav Rail -->
  <svelte:fragment slot="sidebarLeft">
    <div class="hidden md:block h-full">
      {#if showNav}
        <AdminAppRail />
      {/if}
    </div>
  </svelte:fragment>

  <slot />

  <!-- Bottom Nav -->
  <svelte:fragment slot="pageFooter">
    <div class="block md:hidden">
      {#if showNav}
        <AdminBottomNav />
      {/if}
    </div>
  </svelte:fragment>
</AppShell>