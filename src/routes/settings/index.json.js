import { store } from './_store'

let value 

store.subscribe(r => value = r)

export function post(req, res, next) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const coor = JSON.parse(body);
        store.set(coor)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end();
    });
}

export function get(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(value));
}