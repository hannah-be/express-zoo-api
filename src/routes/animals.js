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

module.exports = router