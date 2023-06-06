const {randomStudentsFactory, createRandomStudent} = require("./student");
const { writeJSONFile, readJSONFile } = require("./helper");

function run() {
    if(process.argv[3]) {
    console.log(randomStudentsFactory(process.argv[3]));
    } else {
        console.log(createRandomStudent())
    }
}

run();