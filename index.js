const { createRandomVehicle, randomVehicleFactory } = require("./vehicles")
const { writeJSONFile, readJSONFile } = require("./helpers");

function run() {
    const vehicles = readJSONFile("./data", "vehicleData.json");
    console.log(vehicles)
    if(process.argv[3]){
        vehicles.push(...randomVehicleFactory(process.argv[3]))
    } else {
        vehicles.push(createRandomVehicle())
    }
    writeJSONFile("./data", "vehicleData.json", vehicles)
}

run()