<script>
	import AuthHeader from '../content/AuthHeader.svelte';
	import FlatAlert from '../content/FlatAlert.svelte';
	import FormFooter from '../content/FormFooter.svelte';

	export let headerLabel = '';
	export let headerSubLabel = '';

	export let footerLabel = '';
	export let footerSubLabel = '';
	export let footerHref = '';
</script>

<div class="h-full grid place-content-center">
	<div class="grid grid-cols-1 gap-8 mb-20 w-88 justify-items-center">
		<div class="my-10">
			<AuthHeader label={headerLabel} subLabel={headerSubLabel} />
		</div>

		<slot />

		<FlatAlert />

		<div class="mt-8">
			<FormFooter label={footerLabel} subLabel={footerSubLabel} href={footerHref} />
		</div>
	</div>
</div>
