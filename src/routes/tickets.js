// Require in the express library
const express = require('express')
// Create an express Router
const router = express.Router()

router.get('/tickets', (req, res) => {
  res.json({
    adult: 35,
    concession: 23,
    children: 15
  })
})

// Export the router
module.exports = router