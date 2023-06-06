const userNameArray = require("./userData/userNameInfo");
const {faker} = require("@faker-js/faker");
// createas a random generated name
function randomlyGeneratedName() {
   const name = `${faker.word.adjective()}${faker.animal.type()}`;
   return name; 
}

//create a username either using the input given, or create a generated username
    //if no input is given, 
        //create a username
        //using the randomlyGeneratedName()
      

function createUserName(input) {
    if (!input) {
        let userName = randomlyGeneratedName() 
        return userName ;
    };
    if (input) {
        return input
    }
}
console.log(1, createUserName())
console.log(2, createUserName("pickledTomato"))

//returns a random animal of a random sex
function randomAnimal(){
    const animals = {
        _animalName: faker.animal.type(),
        _gender: faker.person.sex()
    }
     return animals
    }
    console.log(randomAnimal())


    module.exports = {
        randomlyGeneratedName,
        createUserName,
        randomAnimal
    }