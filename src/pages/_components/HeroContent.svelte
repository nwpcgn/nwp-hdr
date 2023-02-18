<script>
	import Fa from 'svelte-fa/src/fa.svelte'
	import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
	export let header, subheader, nav
</script>

<header>
	<h1 class="display-2">{header}</h1>
	<p class="fs-4 mb-4">
		<span class="me-2">{subheader}</span>
		<a href="#/info" aria-label="Info"><Fa icon={faInfoCircle} fw /></a>
	</p>
	<div class="py-2">
		{#each nav as { path, name }, i}
			<a href="#{path}" class="btn btn-secondary btn-sm me-1 mb-1" role="button"
				>{name}</a>
		{/each}
	</div>
</header>

<style>
	header {
		--bg-color: rgba(0, 0, 0, 0.5);
		--color: var(--bs-white);
		width: 100%;
		max-width: 680px;
		margin: 0 auto;
		padding: 1rem;
		text-align: center;
		border-radius: var(--bs-border-radius-lg);
		background-color: var(--bg-color);
		color: var(--color);
	}
</style>
