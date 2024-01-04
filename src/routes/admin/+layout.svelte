<script>
  import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { isNavOnState } from '$lib/store/alert';
	import LogoutButton from '$lib/components/buttons/LogoutButton.svelte';
	import AdminAppRail from '$lib/components/navigation/AdminAppRail.svelte';
	import NavMenuButton from '$lib/components/buttons/NavMenuButton.svelte';
	import AdminBottomNav from '$lib/components/navigation/AdminBottomNav.svelte';
</script>

<AppShell>
  <!-- App Bar -->
  <svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
        <NavMenuButton on:click={() => isNavOnState.set(!$isNavOnState)} />
				<strong class="text-xl ml-3">Admin</strong>
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
      {#if $isNavOnState}
        <AdminAppRail />
      {/if}
    </div>
  </svelte:fragment>

  <slot />

  <!-- Bottom Nav -->
  <svelte:fragment slot="pageFooter">
    <div class="block md:hidden">
      {#if $isNavOnState}
        <AdminBottomNav />
      {/if}
    </div>
  </svelte:fragment>
</AppShell>