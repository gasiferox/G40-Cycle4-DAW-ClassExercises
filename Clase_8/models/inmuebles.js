const mongoose = require('mongoose')

const inmuebleSchema = new mongoose.Schema({
    tipoInmueble: {
        type: String
    },
    ubicacion: {
        type: String
    },
    propietario: {
        type: String
    }
})

module.exports = mongoose.model('inmueble', inmuebleSchema)