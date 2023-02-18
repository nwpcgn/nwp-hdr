<script>
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faCog,
		faDatabase,
		faInfoCircle,
	} from '@fortawesome/free-solid-svg-icons'
	import AudioBar from './pages/_components/AudioBar.svelte'
	import { setTheme, _options } from './pages/_components/_app'
	import Router, { location } from 'svelte-spa-router'
	import routes from './pages/routes'
	import { onMount } from 'svelte'
	const title = 'nwp-hdr'
	onMount(() => {
		setTheme($_options.op1)
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<nav class="navbar navbar-dark bg-dark navbar-expand sticky-top shadow">
	<div class="container-fluid">
		<a class="navbar-brand" href="#/"> HERR DER RINGE </a>
		<div id="navcol-1" class="collapse navbar-collapse">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<a class="nav-link" class:active={$location === '/info'} href="#/info" aria-label="Info">
						<Fa icon={faInfoCircle} size="lg" fw />
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$location.includes('/hsp')}
						href="#/hsp/" aria-label="Hoerspiele">
						<Fa icon={faDatabase} size="lg" fw />
					</a>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						class:active={$location.includes('/settings')}
						href="#/settings/" aria-label="PSettings">
						<Fa icon={faCog} size="lg" fw />
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<main>
	<Router {routes} />
</main>
<AudioBar />



