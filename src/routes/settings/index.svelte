<script>
    let currentPosition = {};
    const set = function() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async pos => {
                const val = {
                    accuracy: pos.coords.accuracy,
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude
                };
                await fetch(`settings.json`, { method: 'POST', body: JSON.stringify(val) })
                currentPosition = pos.coords
            })
        }
    }
</script>

<style>
    div {
        margin-top: 2em;
    }
</style>

<h1>Set up - Admin only</h1>

<button on:click={set}>Setta la posizione corrente</button>

{#if Object.keys(currentPosition).length > 0}
<div>
{#each Object.entries(currentPosition) as entry}
    <span>
        {entry.key}: {entry.value}
    </span>
{/each}
</div>
{/if}