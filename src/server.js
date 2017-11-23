const express = require('express')
// const ticketsRouter = require('./routes/tickets')
// const animalsRouter = require('./routes/animals')

const server = express()

server.get('/', (req, res) => {
  res.json({ message: 'This is home'})
})

server.get('/about', (req, res) => {
  res.json({ message: 'This is about'})
})

// server.use('/', ticketsRouter)
server.use('/', [
  require('./routes/animals'),
  require('./routes/tickets')

])
server.listen(7000, () => {
  console.log('Started at http://localhost:7000')
})