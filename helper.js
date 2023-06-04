const fs = require("node:fs");
const {writeFileSync} = require("node:fs");

function writeJSONFile(data) {
    return writeFileSync(`./data/data.json`, data, {encoding: "utf-8"});
}

function readJSONFile(path,fileName) {
    return readFileSync(`./`)
}