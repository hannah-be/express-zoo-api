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

module.exports = {
  all
}