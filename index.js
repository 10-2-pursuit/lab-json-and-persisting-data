const {faker} = require("@faker-js/faker");
// import boolean from '@fakerjs/boolean';

// boolean();
// //=> true

// boolean();
// //=> false

function findingUniqueEmail(){
        for (let i = 0; i < 100; i++){
            console.log(faker.internet.email())
        }
}

function findingUniqueId(){
    for (let i = 0; i < 100; i++){
    console.log(faker.string.uuid())
    }
}

function findingNewNumber() {
    for (let i = 0; i < 100; i++){
    console.log(faker.number.float())
    }
}



findingNewNumber()
findingUniqueId()
findingUniqueEmail()