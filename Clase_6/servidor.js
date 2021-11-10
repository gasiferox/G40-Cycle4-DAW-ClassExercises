const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://prog_web:ProgWebMintic2022@clusterprogweb.glr3v.mongodb.net/Clase6?retryWrites=true&w=majority'

const modelo = require('./models/Persona')

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("mongodb esta conectado")
}).catch((err) => {
    console.log("mongobd no esta conectado")
    console.log(err)
})

modelo.find({}, (err, data) => {
    if(err){
        console.log("Error de conexión")
        console.log(err)
    }
    console.log(data)
})