const {writeJSONFile, readJSONFile} = require("./helpers")
const {createRandomCougar, createRandomGigolo} = require("./dating_profiles.js/functions")

function run() {
    if (process.argv[2]) {
      console.log(randomProductFactory(process.argv[2]));
    } else {
      const newProduct = createRandomProduct();
      writeJSONFile("./data", "products.json", newProduct);
    }
  }