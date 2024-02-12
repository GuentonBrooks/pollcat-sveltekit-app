<script>
	import { goto } from '$app/navigation';
	import { firebaseSignOut } from '$lib/firebase/auth';
	import { rootPage } from '$lib/pages';
	import IconLogout from '~icons/mdi/logout';

	const logout = () => firebaseSignOut().then(() => goto(rootPage));
</script>

<button type="button" class="btn variant-glass" on:click={logout}>
	<IconLogout />
	<span>Logout</span>
</button>
