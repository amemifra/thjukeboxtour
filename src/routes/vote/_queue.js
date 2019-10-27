const lookup = {}

export function addToQueue(artist, title, points) {
    const key = artist + ':' + title
    if (!points) points = 1
    lookup[key] = !!lookup[key] ? lookup[key] + points : points;
}

export function getList() {
    return Object.entries(lookup).sort((a, b) => a[1] > b[1] ? -1 : 1).map(e => ({
        artist: e[0].split(':')[0],
        title: e[0].split(':')[1],
        points: e[1]
    }))
}

/* 


*/