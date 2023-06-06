const { createRandomVehicle, randomVehicleFactory } = require("../vehicle.js");

const vehicleData = require("../data/vehicleData.json");

describe("createRandomVehicle", () => {
  it("should return an object with _id and type properties", () => {
    const vehicle = createRandomVehicle();
    expect(vehicle).toBeDefined();
    expect(vehicle).toHaveProperty("_id");
    expect(vehicle).toHaveProperty("type");
  });

  it("should generate a valid type for each vehicle", () => {
    const vehicle = createRandomVehicle();
    expect(vehicle.type).toBeDefined();
    expect(typeof vehicle.type).toBe("string");
  });
});


describe ('randomVehicleFactory()', () => {
    it ('should return an empty array if no number inputted as parameter', () => {
        const actual = randomVehicleFactory()
        const expected = [];
        expect(actual).toStrictEqual(expected)
    })
    it ('should return an  array with the amount of vehicles inputted as parameter', () => {
        const actual = randomVehicleFactory(3).length
        const expected = 3;
        expect(actual).toStrictEqual(expected)
    })
})