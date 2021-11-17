const PORT = 8000

const express = require('express')
const fs = require('fs')
const HTML_CONTENT_TYPE = 'text/html'
const path = require('path')
const app = express()

/* const multiplyRoutes = require('./routes/multiplicacion')

app.use('/api', multiplyRoutes) */


app.use(express.static('../client/public'))


app.get('/', (req, res) => {

    res.writeHead(200, {'Content-Type': HTML_CONTENT_TYPE})

    // Se envía el archivo html al server mediante un response
    fs.createReadStream('../client/index.html').pipe(res);

    /* res.end('Mensaje del servidor') */
})


app.post('/multiplicacion', (req, res) => {
    /* const numero1 = req.body.numero1
    const numero2 = req.body.numero2
    const resultado = numero1 + numero2
    console.log(resultado) */
    res.send("resultado")
})


app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

