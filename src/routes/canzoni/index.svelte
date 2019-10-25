<style>
	div {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
	}

	.album {
		flex-basis: 15rem;
		height: 15rem;
		width: 15rem;
	}

	.album figure  {
		flex-basis: 15rem;
		height: 15rem;
		width: 15rem;
	}
</style>

<svelte:head>
	<title>Canzoni</title>
</svelte:head>
 
<div>
	<section class="album">
		<figure style="background-color: purple; color: #FAFAFA;">
			<a href="canzoni/respiri-d-italia">Respiri d'Italia</a>
		</figure>
	</section>
	<section class="album">
		<figure style="background-color: lightgreen;">
			<a href="canzoni/ricordi-d-italia">Ricordi d'Italia</a>
		</figure>
	</section>
	<section class="album">
		<figure style="background-color: hsl(240, 100%, 50%); color: #FAFAFA;">
			<a href="canzoni/chicche-senza-tempo">Chicche senza tempo</a>
		</figure>
	</section>
</div>