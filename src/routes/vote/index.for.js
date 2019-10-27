import { getList, addToQueue } from './_queue.js';

export function get(req, res, next) {

    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(getList()));    
}

export function post(req, res, next) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body)
        addToQueue(data.artist, data.title, data.points)
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end();
    });
}