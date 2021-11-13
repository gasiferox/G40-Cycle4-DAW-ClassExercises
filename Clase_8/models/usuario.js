const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const usuarioSchema = new mongoose.Schema({
    /* _id: {
        type: ObjectId
    }, */
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