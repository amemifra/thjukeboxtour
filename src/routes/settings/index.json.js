import { store } from './_store'

let value = {
    accuracy: 0,
    latitude: 0,
    longitude: 0
}

export function post(req, res, next) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        value = JSON.parse(body)
        console.log(value)
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