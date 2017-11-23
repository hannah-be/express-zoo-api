const express = require('express')
const router = express.Router()

let animals = [
  {
    name: 'Meerkat',
    count: 27
  },
  {
    name: 'Elephant',
    count: 3
  },
  {
    name: 'Boa Constrictor',
    count: 1
  },
  {
    name: 'Zebra',
    count: 6
  }
]

router.get('/animals', (req, res) => {
  res.json(animals)
})

module.exports = router