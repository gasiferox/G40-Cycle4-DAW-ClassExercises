const mongoose = require('mongoose')
const usuarioSchema = new mongoose.Schema({
    cedula: {
        type: String
    },
    nombre: {
        type: String
    },
    clave: {
        type: String
    }
})

module.exports = mongoose.model('usuario', usuarioSchema)