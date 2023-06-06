const { createRandomVehicle, randomVehicleFactory } = require("../vehicles.js")
const vehicleData = require("../data/vehicleData.json")

describe ('createRandomVehicle()', () => {
    it('should return an id, and type', () => {
        const actual = createRandomVehicle();
        expect(actual).toHaveProperty('_id');
        expect(actual).toHaveProperty('type')
    });
    it ('should return an object with two keys', () => {
        const actual = Object.keys(vehicleData[0]).length;
        const expected = 2;
        expect(actual).toStrictEqual(expected)
    });
});

describe ('randomVehicleFactory()', () => {
    it ('should return an empty array if no number inputted as parameter', () => {
        const actual = randomVehicleFactory()
        const expected = [];
        expect(actual).toStrictEqual(expected)
    })
    it ('should return an  array with the amount of vehicles inputted as parameter', () => {
        const actual = randomVehicleFactory(2).length
        const expected = vehicleData.length;
        expect(actual).toStrictEqual(expected)
    })
})