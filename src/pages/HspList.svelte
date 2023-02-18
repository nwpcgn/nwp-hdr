<script>
	import Header from './_components/Header.svelte'
	import Spinner from './_components/Spinner.svelte'
	import { _audio } from './_components/options'
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faComment,
		faBook,
		faMicrophone,
		faPlay
	} from '@fortawesome/free-solid-svg-icons'
	export let params = {}
	const fetchData = async () => {
		try {
			let res = await fetch('./data/hdr.json')
			let d = await res.json()
			if (d) {
				return d
			} else {
				throw new Error()
			}
		} catch (error) {
			alert(error)
		}
	}
	const setAudio = (obj) => {
		if (obj) {
			$_audio = obj
		}
	}
	const setData = async (id = 1) => {
		let data = await fetchData()
		let res = data.filter((x) => x.b_id == id)
		return res
	}

	let promise = setData()

	$: if (params && params.book) {
		promise = setData(params.book)
	}
</script>

<div class="container-lg py-5 mb-5">
	{#await promise}
		<Spinner />
	{:then data}
		<Header bind:book_id={params.book}>
			{data[0].buch}
		</Header>
		{#each data as el}
			<div class="row mb-4">
				<div class="col">
					<article>
						<header
							class="d-flex w-100 justify-content-between align-items-start">
							<div>
								<h1 class="mb-1">
									<span style="opacity: 0.9;">
										<Fa icon={faMicrophone} fw />
									</span>
									<span>{el.titel}</span>
								</h1>
							</div>
							<span class="badge text-bg-secondary fs-6">Folge {el.id}</span>
						</header>
						<div class="px-2">
							<h5 class="mb-1">
								<Fa icon={faComment} fw /> <em>{el.name}</em>
							</h5>
							<p class="mb-1"><Fa icon={faBook} fw /> {el.buch}</p>
							<p class="mb-1">
								<small>{el.inhalt}</small>
							</p>
							<p class="mb-1">
								<button
									type="button"
									class="btn btn-primary"
									on:click={() => setAudio(el)}><Fa icon={faPlay} fw /> Play</button>
							</p>
						</div>
					</article>
				</div>
			</div>
		{/each}
	{/await}
</div>
