const express = require('express');
const mongo = require('mongoose');
const expressApp = express()
const EXPRESS_APP_PORT = 5000

const Animal = mongo.model('Animal', new mongo.Schema({
    tipo: String,
    estado: String,
  }))
  
mongo.connect('mongodb://nico:password@monguito:27017/miapp?authSource=admin')

expressApp.get('/', async (_req, res) => {
    const animales = await Animal.find();
    return res.send(animales)
})
  
expressApp.get('/crear', async (_req, res) => {
    console.log('Creating a')
    await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
    return res.send('true')
  })
  
  expressApp.get('/delete', async (_req, res) => {
    console.log('Removiendo')
    await Animal.remove({ })
    return res.status(200).json({msg:"Great"})
  })

expressApp.listen(EXPRESS_APP_PORT, 
    ()=>console.log(`Express App is running on ${EXPRESS_APP_PORT}`))