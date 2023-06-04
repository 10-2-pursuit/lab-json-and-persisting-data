const { writeFileSync, readFileSync } = require("node:fs");

function writeJSON(path, fName, data){
    data = JSON.stringify(data);
    return writeFileSync(`${path}/${fName}`, data, { encoding: "utf-8"});
}

function readJSON(path, fName){
    const data = readFileSync(`${path}/${fName}`, "utf8");
    return data ? JSON.parse(data) : [];
}

module.exports = {
    writeJSON,
    readJSON,
}