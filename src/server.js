const express = require('express')
// const ticketsRouter = require('./routes/tickets')

const bodyParser = require('body-parser')
// Initialise ther server
const server = express()

server.use(bodyParser.json())

// Express runs the HTTP module so we can use the HTTP request protocols
server.get('/', (req, res) => {
  // Respond with JSON
  res.json({ message: 'This is home.'})
})

server.get('/about', (req, res) => {
  res.json({ message: 'All about ....'})
})

// server.use('/', ticketsRouter)
server.use('/', [
  require('./routes/animals'),
  require('./routes/tickets'),
  require('./routes/seacritters'),
  require('./routes/areas')

])
server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})