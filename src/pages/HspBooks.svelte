<script>
	import Fa from 'svelte-fa/src/fa.svelte'
	import { faCalendar, faBookOpen } from '@fortawesome/free-solid-svg-icons'
	import apiD from './hsp/apiData'
</script>

<div class="container-lg py-5">
	<div class="row row-cols-1 row-cols-md-3 g-2">
		{#each apiD.books as book}
			<div class="col">
				<div class="card">
					<img
						src="./img/hdr/lotr_b{book.id}.jpg"
						class="img-card rounded-top"
						alt="" />
					<div class="card-body">
						<span class="mb-1">{apiD.hoerspiel}</span>
						<h4 class="fs-3 text-truncate">{book.buch}</h4>
						<p class="text-muted mb-0">by {apiD.autor}</p>
						<p class="mb-3">
							<small><Fa icon={faCalendar} fw /> {apiD.veroeffentlicht}</small>
						</p>
						<a href="#/hsp/{book.id}/" class="btn btn-primary"
							><Fa icon={faBookOpen} fw /> Buch {book.id}</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss" global>
	$hero-size: calc(100vh - 56px);
	$card-imge-height: 220px;
	$card-imge-width: 220px;
	.img-card {
		display: block;
		width: 100%;
		height: 100%;
		max-height: $card-imge-height;
		object-fit: cover;
	}
</style>
