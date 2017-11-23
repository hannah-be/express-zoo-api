let animals = [
  {
    id: 1,
    name: 'Meerkat',
    count: 27
  },
  {
    id: 2,
    name: 'Elephant',
    count: 3
  },
  {
    id: 3,
    name: 'Boa Constrictor',
    count: 1
  },
  {
    id: 4,
    name: 'Zebra',
    count: 6
  }
]

let nextID = 5

// Read
function all() {
  return animals
}

function find(id) {
  // Ensure id is an integer
  id = parseInt(id, 10)
  let foundAnimal = null
  // Loop through all the animals
  animals.forEach((animal) => {
    // Compare this animal's id to the one we want to find
    if (animal.id === id) {
      // If so, remember this animal
      foundAnimal = animal
    }
  })
  // Return the animal we found, or if not successful, null
  return foundAnimal
}

// Create
function create(attributes) {
  // Create new animal record copying attributes accross and assigning it an id
  const newAnimal = Object.assign({}, attributes, {
    id: nextID
  })
  // Increment ID for next time
  nextID += 1
  // Add animal to the array that stores our data
  animals.push(newAnimal)
  return newAnimal
}

// Update
function update(id, attributes) {
  const animal = find(id)
  // check if animal not found
  if (!animal) {
    return null
  }
  // Warning: attributes may contain 'id' or other unwanted attributes
  Object.assign(animal, attributes)
  // 
  return animal

}

// Destroy
function destroy(id) {
  id = parseInt(id, 10)
  //  indexOf(id)
  let index = animals.indexOf(animals[id])
  if (index === -1) {
    return null
  }
  animals.splice(index, 1);
  const removed = animals.splice((index - 1), 1)
  return removed[0]
  
}


module.exports = {
  all, 
  find,
  create,
  update,
  destroy
}