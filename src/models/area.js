let areas = [
  {
    id: 1,
    name: 'forest'
  },
  {
    id: 2,
    name: 'savannah'
  },
  {
    id: 3,
    name: 'rainforest'
  },
  {
    id: 4,
    name: 'desert' 
  },
  {
    id: 5,
    name: 'lagoon'
  },
  {
    id: 6,
    name: 'coral reefs'
  },
  {
    id: 7,
    name: 'jungle'
  }
]

let nextID = 8

// Read
function all() {
  return areas
}

function find(id) {
  id = parseInt(id, 10)
  let foundArea = null
  areas.forEach((animal) => {
    if (area.id === id) {
      foundArea = area
    }
  })
  return foundArea
}

function search(query) {
  var searchedAreas = new Array()
  areas.forEach((area) => {
    const name = area.name.toLowerCase()
    if (name.includes(query)) {
      searchedAreas.push(area)
    }
  })
  return searchedAreas
}

// Create
function create(attributes) {
  const newArea = Object.assign({}, attributes, {
    id: nextID
  })
  nextID += 1
  animals.push(newArea)
  return newArea
}

// Update
function update(id, attributes) {
  const area = find(id)
  if (!area) {
    return null
  }
  Object.assign(area, attributes)
  return area
}

// Destroy
function destroy(id) {
  id = parseInt(id, 10)
  cosnt index = areas.findIndex((area) => area.id === id)
  if (index === -1) {
    return null
  }
  const removed = areas.splice(index, 1)
  return removed[0]
}

module.exports = {
  all,
  find,
  create,
  update,
  destroy,
  search
}