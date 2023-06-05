const { writeFileSync, readFileSync } = require("node:fs");

/**
 * writeJSON()
 * ----------------------------
 * write a file stream that encoded with utf-8
 * 
 * @param {string} path - path of the file
 * @param {string} fName - a JSON file name
 * @param {object[]} data - a data set 
 * @returns a file stream
 */
function writeJSON(path, fName, data){
    data = JSON.stringify(data);
    return writeFileSync(`${path}/${fName}`, data, { encoding: "utf-8" });
}

/**
 * readJSON()
 * ------------------------
 * reading an existing JSON file.
 * 
 * @param {string} path - a path of file
 * @param {string} fName - a JSON file name
 * @returns a file stream
 */
function readJSON(path, fName){
    const data = readFileSync(`${path}/${fName}`, {encoding:"utf-8"});
    return data ? JSON.parse(data) : [];
}

module.exports = {
    writeJSON,
    readJSON,
}