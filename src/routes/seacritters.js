const express = require('express')
const Seacritter = require('../models/seacritter')

const router = express.Router()

router.get('/seacritters', (req, res) => {
  const seacritters = Seacritter.all()
  res.json(seacritters)
})

router.get('/seacritters/:id', (req, res) => {
  const id = req.params['id']
  const seacritter = Seacritter.find(id)
  if (seacritter) {
    res.json(seacritter)
  } else {
    res.status(404).json({ error: `The sea critter with ID ${id} was not found.`})
  }
})

router.post('/seacritters', (req, res) => {
  const attributes = req.body
  const newSeacritter = Seacritter.create(attributes)
  res.status(201).json(newSeacritter)
})

router.patch('/seacritters/:id', (req, res) => {
  const id = req.params['id']
  const attributes = req.body
  const updateSeacritter = Seacritter.update(id, attributes)
  if (updateSeacritter) {
    res.status(201).json({updateSeacritter})
  } else {
    res.status(404).json({ error: `The sea critter with id: ${id} was not found.` })
  }
})

router.delete('/seacritters/:id', (req, res) => {
  const id = req.params['id']
  const removedCritter = Seacritter.destroy(id)
  if (removedCritter) {
    res.json(removedCritter)
  } else {
    res.status(404).json({ error: `The critter with id ${id} was not found`})
  }
})

module.exports = router