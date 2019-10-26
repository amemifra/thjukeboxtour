<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`canzoni/chicche-senza-tempo/${params.slug}.json`);
	
		const data = await res.json();

		if (res.status === 200) {
			return { song: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let song;
</script>


<style>
	.content :global(p) {
		margin-top: 2em;
	}
</style>

<svelte:head>
	<title>{song.title}</title>
</svelte:head>

<h1>{song.title}</h1>

<h3>{song.artist}</h3>

<div class='content'>
	{@html song.text}
</div>
