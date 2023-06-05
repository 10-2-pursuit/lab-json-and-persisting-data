const { createRandomTrains, trainArrivalLocation } = require("./src/index")
const { writeJSONFile, readJSONFile } = require("./src/helpers");

function run(){
    const trains = readJSONFile("./data", "trainlist.json");
    console.log(trains)
    if(process.argv[3]){
        trains.push(...trainArrivalLocation(process.argv[3]))
        console.log(trains)
    } else {
        trains.push(createRandomTrains())
    }
    writeJSONFile("./data", "trainlist.json", trains)
}

run()