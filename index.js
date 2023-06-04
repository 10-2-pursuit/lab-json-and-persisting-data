const {faker} = require("@faker-js/faker");

function findingUniqueEmail(){
        for (let i = 0; i < 100; i++){
            console.log(faker.internet.email())
        }
}

function findingUniqueId(){
    console.log(faker.string.uuid())
}

function findingNewNumber() {
    console.log(faker.number.float())
}

function findingBoolean(){

}


findingBoolean()
findingNewNumber()
findingUniqueId()
findingUniqueEmail()