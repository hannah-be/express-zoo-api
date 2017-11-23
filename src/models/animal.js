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
  },
  {
    id: 5,
    name: 'Flamingo',
    count: 58
  },
  {
    id: 6,
    name: 'Sun bear',
    count: 2
  },
  {
    id: 7,
    name: 'Sloth',
    count: 5
  }
]

let nextID = 8

// Read
function all() {
  // sort by name
  animals.sort(function (a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
    // names must be equal
    return 0;
    }
  })
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

function search(query) {
  // Create an array to store the results of the search
  var searchedAnimals = new Array()
  // Loop through all of the animals in the database
  animals.forEach((animal) => {
    // Store the name of each animal in it's lowercase form
    const name = animal.name.toLowerCase()
    // If the name matches the query, add the animal to the array we created earlier
    if (name.includes(query)) {
      searchedAnimals.push(animal)
    } 
  })
  return searchedAnimals
  console.log(searchedAnimals)
  console.log(animals)
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
// function destroy(id) {
//   id = parseInt(id, 10)
//   //  indexOf(id)
//   let index = animals.indexOf(animals[id])
//   if (index === -1) {
//     return null
//   }
//   animals.splice(index, 1);
//   const removed = animals.splice((index - 1), 1)
//   return removed[0]
  
// }

function destroy(id) {
  // Ensure `id` is an integer
  id = parseInt(id, 10)
  // Find the animal with this particular id
  const index = animals.findIndex((animal) => animal.id === id)
  // Check if index was not found
  if (index === -1) {
    return null
  }

  // Remove the animal at this index
  const removed = animals.splice(index, 1)
  // Return the removed animal
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