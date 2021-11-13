const mongoose = require('mongoose')

const ubicacionSchema = new mongoose.Schema({
    departamento: {
        type: String
    },
    ciudad: {
        type: String
    },
    barrio: {
        type: String
    }
})