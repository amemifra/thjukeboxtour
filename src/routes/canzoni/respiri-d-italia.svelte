<script>
    let songs = [{
        name: 'Si, ah',
        artist: 'Frah Quintale',
        link: ''
    }, {
        name: 'Rolls Royce',
        artist: 'Achille Lauro',
        link: ''
    }, {
        name: 'Paracetamolo',
        artist: 'Calcutta',
        link: ''
    }, {
        name: 'Forse più tardi un mango adesso',
        artist: 'Lo stato sociale',
        link: ''
    }, {
        name: 'Maddalena',
        artist: 'Mannarino',
        link: ''
    }, {
        name: 'Sotto casa',
        artist: 'Max gazzè',
        link: ''
    }, {
        name: 'Rotolando verso sud',
        artist: 'Negrita',
        link: ''
    }, {
        name: '50 Special',
        artist: 'Lunapop',
        link: ''
    }, {
        name: 'Spirale ovale',
        artist: 'Articolo 31',
        link: ''
    }, {
        name: 'China town',
        artist: 'Caparezza',
        link: ''
    }, {
        name: 'La musica non c\'è',
        artist: 'Coez',
        link: ''
    }, {
        name: 'Me so\' mbriacato',
        artist: 'Mannarino',
        link: ''
    }]
</script>

<style>
    .album {
        background-color: purple;
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


<div class="playlist">
    <section>
        <figure class="album">
            <h2>Respiri d'Italia</h2>
        </figure>
        <ul>
        {#each songs as song}
            <li>
                <a href="{song.link}">
                    {song.name}
                </a>
                <span>
                {song.artist}
                </span>
                   
            </li>
        {/each}
        </ul>
    </section>
</div>