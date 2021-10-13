const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
    console.log("Nueva petición");
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write("Hola, que tal");
            res.end();
            break;
        
        default:
            res.write("Página no encontrada");
            res.end();
    }

    /* res.writeHead(200, {'Content-Type': 'text/html'});

    // Escribir la respuesta
    res.write('Hola Mundo');

    res.end(); */
}

console.log("Servidor iniciado en el puerto 3000");