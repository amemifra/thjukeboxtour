import { position } from './_store'

export function get(req, res, next) {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(position);
}
