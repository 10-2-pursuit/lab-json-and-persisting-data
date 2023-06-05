const { writeJSON, readJSON } = require("./src/fs.js");
const { createArrF } = require("./src/gen.js");
const fs = require("fs");
/**
 * run()
 * -------------------------
 * default function to handle argv & functions.
 * 
 */
function run(){
    const argc = process.argv.length;
    if(argc == 2){
        fs.stat(`${process.cwd()}/data/data.json`, (err, stat) => {
            if(!err){
                console.log(readJSON(`${process.cwd()}/data`,"data.json"));
            }
            else if(err === "ENOENT"){
                console.log("data.json does not exist");
            }
            else{
                console.log("error:",err.stat);
            }
        })
        
    }
    else if(argc == 3){
        let arr = createArrF(process.argv[2]);
        writeJSON(`${process.cwd()}/data`,"data.json", arr);
    }
    else{
        console.log("node index.js (number) : will create (number) objects to JSON file");
        console.log("node index.js : read & log JSON file");
    }
    return 0;
}

run();

module.exports = {
    run,
}