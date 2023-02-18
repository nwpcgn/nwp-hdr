<script>
	import HeroContent from './_components/HeroContent.svelte'
	export let pData = {}
</script>

<section class="page-center" style="background-image: url({pData.bg ? pData.bg : ''});">
	<div class="px-4">
		<HeroContent {...pData} />
	</div>
</section>

<style>
</style>
