<script>
  import { AppShell } from '@skeletonlabs/skeleton';
  import GuentonLogo from '../../components/images/GuentonLogo.svelte';
</script>

<AppShell>
	<slot />
	<svelte:fragment slot="footer">
    <div class="flex justify-end ">
      <div class="w-20">
        <GuentonLogo />
      </div>
    </div>
  </svelte:fragment>
</AppShell>