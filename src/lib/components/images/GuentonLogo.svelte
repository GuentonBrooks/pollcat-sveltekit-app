<script>
	let srcLight = '/img/guentonBlack.png';
	let srcDark = '/img/guentonWhite.png';
</script>

<div class="block dark:hidden">
	<img src={srcLight} alt="Guenton Logo" />
</div>

<div class="hidden dark:block">
	<img src={srcDark} alt="Guenton Logo" />
</div>
