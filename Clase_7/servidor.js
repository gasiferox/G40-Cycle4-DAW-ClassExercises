const modelo = require('./models/usuario')

require('./models/conexion')

// Add register
var myObj = {
    cedula: "79654658",
    nombre: "Gustavo",
    clave: "123456"
}
modelo.collection.insertOne(myObj, (err, res) => {
    if(err) throw err
    console.log("1 document inserted")
})

// list register
modelo.find({}, (err, data) => {
    console.log(data)
})