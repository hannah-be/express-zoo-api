const express = require('express')
const Area = require('../models/area')

const router = express.Router()

router.get('/areas', (req, res) => {
  if (Object.keys(req.query).length !=0) {
    const nameQuery = req.query.name.toLowerCase()
    let searchedAreas = Area.search(nameQuery)
    let area = Area.all()
    if (searchedAreas.length > 0) {
      res.json(searchedAreas)
    } else {
      res.json({ message: 'No match found' })
    } 
  } else {
    res.json(Animal.all())
  }
})

router.get('/areas/:id', (req, res) => {
  const id = req.params['id']
  const area = Area.find(id)
  if (area) {
    res.json(area)
  } else {
    res.status(404).json({ error: `The area with ID ${id} was not found.`})
  }
})

// Create
router.post('/areas', (req, res) => {
  const attributes = req.body
  const newArea = Area.create(attributes)
  res.status(201).json(newArea)
})


// Update
router.patch('/areas/:id', (req, res) => {
  const id = req.params['id']
  const attributes = req.body
  const updatedArea = Area.update(id, attributes)
  if (updatedArea) {
    res.status(201).json({updatedArea})
  } else {
    res.status(404).json({ error: `The animal with id: ${id} was not found.`})
  }
})

router.delete('/areas/:id', (req, res) => {
  const id = req.params['id']
  const removedArea = Area.destroy(id)
  if (removedArea) {
    res.json(removedArea)
  } else {
    res.status(404).json({ error: `The area with id: ${id} was not found.`})
  }
})

module.exports = router