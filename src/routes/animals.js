const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

router.get('/animals', (req, res) => {
  const animals = Animal.all()
  res.json(animals)
})

router.get('/animals/:id', (req, res) => {
  const id = req.params['id']
  const animal = Animal.find(id)
  if (animal) {
    // If animal was found
    res.json(animal)
  } else {
    // If animal was not found
    res.status(404).json({ error: `The animal with ID ${id} was not found.` })
  }
})

router.post('/animals', (req, res) => {
  // const rawData = req.body
  // const attributes = JSON.parse(rawData)
  // Because we have body parser, we can do this form:
  const attributes = req.body
  const newAnimal = Animal.create(attributes)
  res.status(201).json(newAnimal)
})

module.exports = router