const userNameArray = require("./userData/userNameInfo");
const {faker} = require("@faker-js/faker");

function randomlyGeneratedName() {
   const name = `${faker.word.adjective()}${faker.animal.type()}`;
   return name; 
}

function createUserName(input) {
    for(let i = 0; i < userNameArray; i++){
        if(input || userName  === i){
            return "userName taken";
        }
        else {
            input = userName
        }
        userNameArray.push(userName);
    } 
    if (!input) {
    userName = randomlyGeneratedName() 
    };
    return userName ;
    }

    console.log(createUserName())
    console.log(createUserName("pickledTomato"))


    module.exports = {
        randomlyGeneratedName,
        createUserName
    }