const PORT = 8000

const express = require('express')

const app = express()

const fs = require('fs')

const multer = require("multer")

const path = require('path')

/* const {createReadStream} = require('fs') */

const HTML_CONTENT_TYPE = 'text/html'

//obtener resp
app.get('/', (req, res) => {

    res.writeHead(200, {'Content-Type': HTML_CONTENT_TYPE})

    // Se envía el archivo html al server mediante un response
    fs.createReadStream('Clase_5/clase5.html').pipe(res);
    // se elimina la línea 13 ya que el createReadStream hace parte del módulo fs

    /* res.end('Mensaje del servidor') */
})

let objMulter = multer({dest: "./public/upload"});

app.use(objMulter.any())

app.use(express.static("./public"));

app.post("/upload", (req,res) => {
    /* res.send("Respuesta del servidor") */

    // Obtener el nombre
    let oldName = req.files[0].path;
    // Agrega el sufijo original al nuevo nombre
    let newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
    // Cambiar el nombre del archivo
    fs.renameSync(oldName, newName);
    
    res.send({
      err: 0,
      url:
        "http://localhost:8000/upload/" +
        req.files[0].filename + path.parse(req.files[0].originalname).ext // La ruta de vista previa de la imagen
    });
  
})

app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))