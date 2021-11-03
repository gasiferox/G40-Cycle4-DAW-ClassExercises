const PORT = 8000

const express = require('express')

const app = express()

const path = require('path')

//obtener resp
/* app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})

    res.end('Mensaje del servidor')
}) */

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname +'/clase4.html'));
});


app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))