const { faker } = require("@faker-js/faker");

function createRandomVehicle(){
    const vehicle = {
        _id: faker.datatype.uuid(),
        type: faker.vehicle.type(),
    }
    return vehicle
}

function randomVehicleFactory(number){
    const vehicle = [];
    for(let i = 0; i < number; i++){
        vehicle.push(createRandomVehicle())
    }
    return vehicle
}

module.exports = {
    createRandomVehicle,
    randomVehicleFactory
}