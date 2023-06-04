const {faker} = require("@faker-js/faker")

const animals = {
    _id: faker.datatype.uuid(),
    _animalName: faker.animal.type(),
   location: faker.location.county(),
    gender: faker.person.gender(),
}
 return animals