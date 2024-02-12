<script>
	import { firebaseSignOut } from '$lib/firebase/auth';
	import { gotoRootPage } from '$lib/navigate';
	import IconLogout from '~icons/mdi/logout';

	const logout = () => firebaseSignOut().then(() => gotoRootPage());
</script>

<button type="button" class="btn variant-glass" on:click={logout}>
	<IconLogout />
	<span>Logout</span>
</button>
