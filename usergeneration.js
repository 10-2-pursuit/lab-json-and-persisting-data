const userNameData = require("./userData/userNameInfo");
const {faker} = require("@faker-js/faker");
// createas a random generated name
function randomlyGeneratedName() {
   const name = `${faker.word.adjective()}${faker.animal.type()}`;
   return name; 
}


function checkForDuplicates(userNameData, input) {
    const username = input || randomlyGeneratedName();
    if (userNameData.includes(username)) {
      return "Username is taken";
    } else {
      return username;
    }
  }
// console.log(1, checkForDuplicates(userNameData, "testerName", createUserName))
// console.log(2, checkForDuplicates(userNameData, "pinkKoala", createUserName))
// console.log(3, checkForDuplicates(userNameData, null, createUserName))

module.exports = {
        randomlyGeneratedName,
        checkForDuplicates
}