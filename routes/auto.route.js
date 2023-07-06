const express = require('express')
const app = express()
const autoRuta = express.Router()

//declaramos un objeto modelo
let Auto = require('../models/Auto')


autoRuta.route('/create').post((req,res) =>{
  Auto.create(req.body)
    .then((data) => {
      console.log('Se inserto el documento')
      res.send(data)
    })
    .catch((err) =>{
      console.log(err)
    })
})

//Obtener todos los empledos
autoRuta.route('/autos').get((req,res)=>{
  Auto.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Obtener Auto por su id
autoRuta.route('/auto/:id').get((req,res) => {
  Auto.findById(req.params.id)
    .then((data) =>{
      res.send(data)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Actualizar usuario
autoRuta.route('/update/:id').put((req,res) =>{
  Auto.findByIdAndUpdate(req.params.id, {
    $set:req.body
  })
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
})

// Eliminar usuario
autoRuta.route('/delete/:id').delete((req,res) => {
  Auto.findByIdAndRemove(req.params.id)
    .then((data) =>{
      console.log('Se elimino el documento')
    })
    .catch((err) => {
      console.error(err)
    })
})

module.exports = autoRuta;
