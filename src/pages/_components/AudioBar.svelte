<script>
	import Fa from 'svelte-fa/src/fa.svelte'
	import {
		faPlay,
		faTimes,
		faMicrophone,
		faPause,
		faMicrophoneSlash
	} from '@fortawesome/free-solid-svg-icons'
	import { _audio, sleep } from './options'
	import { onMount } from 'svelte'
	let src = 'https://nwp-cgn.de/archiv/audio/haiyti_nightliner.mp3'
	let duration = 0
	let dur = 0
	let paused = true
	let muted = false
	let volume = 0.8
	let time = 0
	let pos = 0
	let vol = 80
	let open
	const toggle = () => {
		open = !open
	}
	const format = (seconds) => {
		if (isNaN(seconds)) return '...'
		const minutes = Math.floor(seconds / 60)
		seconds = Math.floor(seconds % 60)
		if (seconds < 10) seconds = '0' + seconds
		return `${minutes}:${seconds}`
	}
	const onAudioChange = (audio) => {
		if (audio && audio.audio_link) {
			paused = true
			src = audio.audio_link
			open = true
		}
	}
	onMount(async () => {
		await sleep(100)
		open = false
	})

	$: onAudioChange($_audio)

	$: volume = vol / 100
	$: pos = format(time.toFixed(1))
	$: dur = format(duration.toFixed(1))
</script>

<footer class="audio-wrapper" class:open>
	<div class="top-range">
		<label for="customRange1" class="visually-hidden">Range</label>
		<input
			type="range"
			class="form-range"
			id="customRange1"
			bind:value={time}
			min="0"
			step="1"
			max={duration} />
	</div>
	<button
		type="button"
		class="close-button"
		class:play={!paused && !open}
		class:open
		on:click={toggle}
		aria-label="Toggle Player">
		{#if !open}
			<Fa icon={faPlay} fw size="lg" />
		{:else}
			<Fa icon={faTimes} fw size="lg" />
		{/if}
	</button>
	<nav class="audio-bar">
		<article class="ctrl-bar">
			<button
				on:click={() => (paused = !paused)}
				class="ctrl-button"
				class:text-danger={!paused}
				aria-label="Play Button">
				{#if paused}
					<Fa icon={faPlay} fw size="lg" />
				{:else}
					<Fa icon={faPause} fw size="lg" />
				{/if}
			</button>

			<span class="display-time">
				{pos}/{dur}
			</span>
			<div
				class="flex-grow-1 text-truncate mx-2 px-2 border-end border-start"
				class:text-primary={!paused}>
				{$_audio && $_audio.name ? $_audio.name : 'Audio Track'}
			</div>
			<button
				on:click={() => (muted = !muted)}
				class="ctrl-button"
				class:text-danger={!muted}
				aria-label="Mute Button">
				{#if muted}
					<Fa icon={faMicrophone} fw size="lg" />
				{:else}
					<Fa icon={faMicrophoneSlash} fw size="lg" />
				{/if}
			</button>
			<span class="px-2 d-none d-md-block" class:muted>
				<label for="vol" class="visually-hidden">Volune</label>
				<input
					bind:value={vol}
					type="range"
					class="form-range"
					id="vol"
					name="vol"
					step="1"
					min="0"
					max="100" />
			</span>
			<span class="display-vol d-none d-md-block" class:muted>
				{volume * 100}%
			</span>
		</article>
		<audio
			class="hidden"
			controls={false}
			{src}
			bind:duration
			bind:currentTime={time}
			bind:paused
			bind:volume
			bind:muted />
	</nav>
</footer>

<style>
	:root {
		--ab-height: 50px;
		--ab-tfy: 54px;
		--ab-tbtn-off-y: -50px;
		--ab-tbtn-width: 48px;
		--ab-tbtn-height: 50px;
		--ab-tbtn-z: 1032;
		--ab-range-z: 1034;
		--ab-range-off-x: 46px;
		--ab-range-off-y: -12px;
	}
	.audio-wrapper {
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1030;
		padding: 0 0.5rem;
		width: 100%;
		height: var(--ab-height);
		align-items: center;
		display: flex;
		transform: translateY(var(--ab-tfy));
		transition: transform 500ms ease-in-out;
		background-color: var(--bs-body-bg);
	}
	.audio-wrapper.open {
		transform: translateY(0);
	}
	.close-button {
		position: absolute;
		z-index: var(--ab-tbtn-z);
		right: 0;
		top: var(--ab-tbtn-off-y);
		border: 0;
		display: inline-flex;
		width: var(--ab-tbtn-width);
		height: var(--ab-tbtn-height);
		justify-content: space-around;
		align-items: center;
		opacity: 1;
		border-top-left-radius: var(--bs-border-radius);
		/* border-bottom-left-radius: var(--bs-border-radius); */
		background-color: var(--bs-secondary);
		color: var(--bs-light);
		transition: background-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1),
			opacity 250ms cubic-bezier(0.42, 0, 0.58, 1);
	}
	.close-button.play {
		background-color: var(--bs-primary);
		opacity: 0.7;
	}
	.audio-bar {
		position: relative;
		height: var(--ab-height);
		padding: 0.2rem 0 0 0;
		width: 100%;
		display: flex;
		align-items: center;
	}

	.top-range {
		position: absolute;
		z-index: var(--ab-range-z);
		left: 0;
		top: var(--ab-range-off-y);
		right: var(--ab-range-off-x);
		opacity: 0;
		transition: opacity 500ms ease-in-out;
	}
	.audio-wrapper.open .top-range {
		opacity: 1;
		transition: opacity 500ms ease-in-out;
	}

	/* @media (min-width: 576px) {
		.top-range {
			left: 0;
		}
	} */

	.ctrl-bar {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.ctrl-button {
		background-color: transparent;
		border: 0;
		display: inline-flex;
		width: 36px;
		height: 36px;
		justify-content: space-around;
		align-items: center;
		color: var(--bs-primary);
	}
	.display-time {
		padding: 0.1rem 0.2rem;
		width: 90px;
		max-width: 90px;
		overflow: hidden;
		border: 1px solid var(--bs-border-color);
		border-radius: var(--bs-border-radius);
	}
	.display-vol {
		padding: 0.1rem 0.2rem;
		width: 50px;
		max-width: 50px;
		overflow: hidden;
		border: 1px solid var(--bs-border-color);
		border-radius: var(--bs-border-radius);
	}
	.muted {
		opacity: 0.2;
	}
</style>
