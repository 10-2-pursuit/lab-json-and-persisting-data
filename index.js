const { writeJSON, readJSON } = require("./src/fs.js");
const { createArrF } = require("./src/gen.js");
const _ = require('lodash');

/**
 * run()
 * -------------------------
 * default function to handle argv & functions.
 * 
 */
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
        console.log("node index.js (number) : will create (number) objects to JSON file");
        console.log("node index.js : read & log JSON file");
    }
}

run();