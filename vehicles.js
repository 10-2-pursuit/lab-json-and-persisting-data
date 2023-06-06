const { faker } = require("@faker-js/faker");

function createRandomVehicle(){
    const vehicle = {
        _id: faker.datatype.uuid(),
        type: faker.vehicle.type(),
    }
    return vehicle
}

function randomVehicleFactory(number){
    const vehicles = [];
    for(let i = 0; i < number; i++){
        vehicles.push(createRandomVehicle())
    }
    return vehicles
}

module.exports = {
    createRandomVehicle,
    randomVehicleFactory
}