const { writeJSON, readJSON } = require("./src/fs.js");
const { createArrF } = require("./src/gen.js");
const _ = require('lodash');


function run(){
    const argc = process.argv.length;
    if(argc == 2){
        console.log(readJSON("./data","data.json"));
    }
    else if(argc == 3){
        let arr = createArrF(process.argv[2]);
        let temp = readJSON("./data","data.json");
        temp = _.concat(temp,arr);
        writeJSON("./data","data.json", temp);
    }
    else{
        console.log("HI");
    }
}

run();