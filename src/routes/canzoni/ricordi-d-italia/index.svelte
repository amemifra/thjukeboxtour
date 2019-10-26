<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`canzoni/ricordi-d-italia.json`).then(r => r.json()).then(songs => {
			return { songs };
		});
	}
</script>


<script>
    export let songs = []
</script>

<style>
    .album {
        background-color: lightgreen;
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
    <title>Ricordi d'Italia</title>
</svelte:head>


<div class="playlist">
    <section>
        <figure class="album">
            <h2>Ricordi d'Italia</h2>
        </figure>
        <ul>
        {#each songs as song}
            <li>
                <a href="canzoni/ricordi-d-italia/{song.slug}">
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