const { createRandomTrains, trainArrivalLocation } = require("../src/index")

describe('createRandomTrains', () => {
    test('Should create an object with _id, trainStationDestination, isDelayed, trainArrivalInMins.', () => {
        const actual = createRandomTrains()
        expect(actual).toHaveProperty('_id', 'trainStationDestination', 'isDelayed', 'trainArrivalInMins')
    });
});

describe('trainArrivalLocation', () => {
    test('Should push train object thats made into trains array.', () => {
        const actual = trainArrivalLocation()
        expect(actual).toEqual(expect.arrayContaining(actual))
    });
});
