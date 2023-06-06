const { createRandomProfile, randomProfileFactory } = require("./profiles")
const { writeJSONFile, readJSONFile } = require("./helpers")

function run(){
    const profiles = readJSONFile("./data", "users.json");
    console.log(profiles)
    if(process.argv[3]){
        profiles.push(...randomProfileFactory(process.argv[3]))
    } else {
        profiles.push(createRandomProfile())
    }
    writeJSONFile("./data", "users.json", profiles)
}

run()

