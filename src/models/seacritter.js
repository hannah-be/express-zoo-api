let seacritters = [
  {
    id: 1,
    name: 'Manta Ray',
    count: 32
  },
  {
    id: 2,
    name: 'Sea cucumber',
    count: 12
  },
  {
    id: 3,
    name: 'Angel Fish',
    count: 29
  },
  {
    id: 4,
    name: 'Sea horse',
    count: 13
  },
  {
    id: 5,
    name: 'Octopus',
    count: 5
  },
  {
    id: 6,
    name: 'Clown Fish',
    count: 2
  },
  {
    id: 7,
    name: 'Turtle',
    count: 3
  },
  {
    id: 8,
    name: 'Whale Shark',
    count: 5
  }
]

let nextID = 9

// Read
function all() {
  return seacritters
}

function find(id) {
  id = parseInt(id, 10)
  let foundSeaCritter = null
  // Loop through each critter
  seacritters.forEach((seacritter) => {
    // Compare this critter's id to the one we want to find
    if (seacritter.id === id) {
      // If so, remember this critter
      foundSeaCritter = seacritter
    }
  })
  // Return the sea critter found, or if not successful, null
  return foundSeaCritter
}

// Create
function create(attributes) {
  const newSeacritter = Object.assign({}, attributes, {
    id: nextID
  })
  nextID += 1
  seacritters.push(newSeacritter)
  return newSeacritter
}

// Update
function update(id, attributes) {
  const seacritter = find(id)
  if (!seacritter) {
    return null
  } 
  Object.assign(seacritter, attributes)
  return seacritter
}

// Delete
function destroy(id) {
  // Ensure `id` is an integer
  id = parseInt(id, 10)
  const index = seacritters.findIndex((seacritter) => seacritter.id === id)
  if (index === -1) {
    return null
  }
  const removed = seacritters.splice(index, 1)
  return removed[0]
}

module.exports = {
  all,
  find,
  create,
  update,
  destroy
}