const PORT = 8000

const express = require('express')
const fs = require('fs')
const HTML_CONTENT_TYPE = 'text/html'
const path = require('path')

const bodyParser = require("body-parser");
/* app.use(bodyParser.json()); */

const app = express()

app.use(express.static('public'))

const modelo = require('./models/usuario')

require('./models/conexion')

app.get('/', (req, res) => {

    res.writeHead(200, {'Content-Type': HTML_CONTENT_TYPE})

    // Se envía el archivo html al server mediante un response
    fs.createReadStream('./index.html').pipe(res);

    /* res.end('Mensaje del servidor') */
})


app.post('/upload', (req, res) => {
    var myObj = {cedula: req.body.cedula, nombre: req.body.nombre, clave: req.body.clave}
    modelo.collection.insertOne(myObj, (err, res) => {
        if(err) throw err
    })
    res.send("1 document inserted from html")
})


app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

