const PORT = 8000

const express = require('express')

const app = express()

/* const path = require('path') */

const {createReadStream} = require('fs')

//obtener resp
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})

    createReadStream('Clase_5/clase5.html').pipe(res);

    /* res.end('Mensaje del servidor') */
})

app.post("/upload", (req,res) => {
    res.send("Respuesta del servidor")
})


app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))