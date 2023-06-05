const { faker } = require("@faker-js/faker")


function createRandomTrains() {
    const train = {
        _id: faker.string.uuid(),
        trainStationDestination: faker.location.city(),
        isDelayed: faker.datatype.boolean(),
        trainArrivalInMins: faker.number.int(100)
    }
    return train;
}

function trainArrivalLocation(number) {
    trains = [];
    for (let i = 0; i < number; i++) {
        trains.push(createRandomTrains())
    }
    return trains
}

module.exports = {
    createRandomTrains,
    trainArrivalLocation,
}