const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Auto = new Schema({
  marca: {
    type: String
  },
  modelo: {
    type: String
  },
  anio: {
    type: Number
  },
  precio: {
    type: Number
  },
  imagen: {
    type: String
  }
}, {
  collection: 'autos'
})

module.exports = mongoose.model('Auto', Auto)
