<script>
	import Options from './_components/Options.svelte'
	import Router from 'svelte-spa-router'
	const prefix = '/settings'
	const routes = {
		'/': Options
	}
</script>

<section class="page py-5">
	<Router {routes} {prefix} />
</section>




