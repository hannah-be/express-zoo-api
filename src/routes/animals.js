const express = require('express')
const Animal = require('../models/animal')

const router = express.Router()

router.get('/animals', (req, res) => {
  // If a query exists in the request (.keys adds index)
  if (Object.keys(req.query).length != 0) {
    // store the query
    const nameQuery = req.query.name.toLowerCase()
    // Run the .search function created in the model
    let searchedAnimals = Animal.search(nameQuery)
    let animal = Animal.all()
    if (searchedAnimals.length > 0) {
      res.json(searchedAnimals)
    } else {
      res.json({ message: 'No match found' })
    }
  } else {
    console.log(Animal.all())
    res.json(Animal.all())
  }
})

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

router.patch('/animals/:id', (req, res) => {
  const id = req.params['id']
  const attributes = req.body
  const updatedAnimal = Animal.update(id, attributes)
  if (updatedAnimal) {
    res.status(201).json({updatedAnimal})
  } else {
    res.status(404).json({ error: `The animal with id: ${id} was not found.`})
  }
})

// router.delete('/animals/:id', (req, res) => {
//   const id = req.params['id']
//   const animal = Animal.find(id)
//   if (animal) {
//     Animal.destroy(id)
//     res.status(204).json({ message: `Animal ${id} has been deleted.`})
//     // return animal
//   } else {
//     res.status(404).json({ error: `There is no animal with id: ${id}` })
//   }
// })

router.delete('/animals/:id', (req, res) => {
  const id = req.params['id']
  const removedAnimal = Animal.destroy(id)
  if (removedAnimal) {
    res.json(removedAnimal)
  }
  else {
    res.status(404).json({ error: `The animal with id '${id}' was not found` })
  }
})



module.exports = router