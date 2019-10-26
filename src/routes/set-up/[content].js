import { setPosition } from './_store'

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
    const { content } = req.params;
    
    setPosition(content)

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end();
}
