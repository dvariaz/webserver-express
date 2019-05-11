const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    let person = {
        name: 'David',
        edad: 23,
        url: req.url,
    }

    res.write(JSON.stringify(person));
    res.end();
}).listen(8080);

console.log('Escuchando el puerto 8080');