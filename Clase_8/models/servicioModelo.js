const express= require("express");
const {createReadStream} = require('fs')
var modelo= require('./user')

//var qs=require("querystring")
//var body_parser = require('body-parser');


const app= new express();
const HTML_CONTENT_TYPE = 'text/html'

//app.use(body_parser.urlencoded({extended:true}));
/*
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.use(express.static("public"));


const path = require("path");
var modeloUsario= require('./inmuebles')


 require('./conexion')
 //var modelo2=require('./zonas')

 
     
 app.post("/upload", (req, res) => {
  var myobj = { cedula: req.body.cedula, tel: req.body.tel, clave: req.body.clave  };
  modelo.collection.insertOne(myobj, function(err, res) {
  if (err) throw err;

  })
  res.send("respuesta del servidor")
  })

/*
modeloUsario.find({}, (err, docs) => {

     console.log(docs[2].nombre)

})
*/
  //})

  app.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
 

  createReadStream('./index.html').pipe(res)
//res.end("hola mundo");
   
  })


  app.listen(600, () => {

    console.log("aplicacion corriendo en el puerto 600")
    
    })