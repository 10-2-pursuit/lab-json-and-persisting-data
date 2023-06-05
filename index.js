const { createRandomProduct, randomProductFactory } = require("./store")
const { writeJSONFile, readJSONFile } = require("./helpers");

function run() {
    const products = readJSONFile("./data", "productData.json");
    if(process.argv[3] && typeof Number(process.argv[3]) === "number"){
        products.push(...randomProductFactory(process.argv[3]));
    } else {
        products.push(createRandomProduct());
    }
    writeJSONFile("./data", "productData.json", products);
    return products.length;
}

run();

module.exports = {
    run
}