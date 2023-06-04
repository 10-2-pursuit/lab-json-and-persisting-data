const fs = require("node:fs");
const { writeFileSync } = require("node:fs");

function writeJSON(path, fName, data){
    return writeFileSync(`${path}/${fName}`, data, { encoding: "utf-8"});
}

function readJSON(path, fName){
    return readFileSync(`${path}/${fName}`, "utf8");
}

module.exports = {
    writeJSON,
    readJSON,
}