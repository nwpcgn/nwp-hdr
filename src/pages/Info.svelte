<script>
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faFilm,
		faPlay,
		faCalendar,
		faMicrophone,
		faBookOpen
	} from '@fortawesome/free-solid-svg-icons'
	import apiD from './hsp/apiData'
	// export let pData = {}
</script>

<section class="page py-5">
	<div class="container py-5">
		<div class="row g-2">
			<div class="col">
				<header class="d-flex w-100 justify-content-between align-items-start">
					<div>
						<h1 class="display-2 mb-2">
							<span class="text-primary" style="opacity: 0.5;">
								<Fa icon={faMicrophone} fw />
							</span>
							<span>{apiD.hoerspiel}</span>
						</h1>
					</div>
					<!-- <span class="badge text-bg-secondary">{apiD.h_id}</span> -->
				</header>
				<div class="px-3 text-start">
					<h5 class="mb-3 fs-2">by <em>{apiD.autor}</em></h5>
					<p class="mb-1 fs-5"><Fa icon={faFilm} fw /> {apiD.regie}</p>
					<p class="mb-1 fs-5"><Fa icon={faPlay} fw /> {apiD.produktion}</p>
					<p class="mb-3 fs-5">
						<Fa icon={faCalendar} fw />
						{apiD.veroeffentlicht}
					</p>
					<p class="mb-4 fs-6">
						<em>{apiD.info}</em>
					</p>
					<div class="d-gridx gap-2">
						<a href="#/hsp/" class="btn btn-primary">
							<Fa icon={faBookOpen} fw />
							Hoerspiele
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
