const http = require('http');

http.createServer((req, res) => { //Creamos el servidor, pasamos los parámetros de request y respuesta 

    res.writeHead(200, { 'Content-Type': 'aplication/json' });

    let salida = {
        nombre: 'Alberto',
        edad: 35,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();
})

.listen(8080);

console.log('Escuchando el puerto 8080');