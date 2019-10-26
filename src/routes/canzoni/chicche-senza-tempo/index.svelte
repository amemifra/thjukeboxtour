<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`canzoni/chicche-senza-tempo.json`).then(r => r.json()).then(songs => {
			return { songs };
		});
	}
</script>


<script>
    export let songs = []
</script>

<style>
    .album {
        background-color: hsl(240, 100%, 50%);
        color: #FAFAFA;
    }

    li {
        display: flex;
        flex-flow: column;
        padding: .5rem;
        justify-content: flex-start;
    }

    li a {
        font-weight: bold;
    }
</style>
<svelte:head>
    <title>Chicche senza tempo</title>
</svelte:head>


<div class="playlist">
    <section>
        <figure class="album">
            <h2>Chicche senza tempo</h2>
        </figure>
        <ul>
        {#each songs as song}
            <li>
                <a href="canzoni/chicche-senza-tempo/{song.slug}">
                    {song.title}
                </a>
                <span>
                    {song.artist}
                </span>
                   
            </li>
        {/each}
        </ul>
    </section>
</div>