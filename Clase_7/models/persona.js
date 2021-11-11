const mongoose = require('mongoose')

const personaSchema = mongoose.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    rol: {
        type: String
    },
    edad: {
        type: Number
    }
})

module.exports = mongoose.model('persona', personaSchema)