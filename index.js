const { createRandomProfile, randomProfileFactory } = require("./src/profiles")
const { writeJSONFile, readJSONFile } = require("./src/helpers")

function run(){
    const profiles = readJSONFile("data", "users.json");
    console.log(profiles)
    if(process.argv[3]){
        profiles.push(...randomProfileFactory(process.argv[3]))
    } else {
        profiles.push(createRandomProfile())
    }
    writeJSONFile("data", "users.json", profiles)
}

try {
    run()
}
catch(err) {
    console.log(err)
}
