const { faker } = require("@faker-js/faker");

function createRandomProduct() {
    const product = {
        id: faker.datatype.uuid(),
        product: faker.commerce.product(),
        price: faker.commerce.price(),
        insurance: faker.datatype.boolean()
    }
    return product;
}

function randomProductFactory(number) {
    const products = [];
    for(let i = 0; i < number; i++){
        products.push(createRandomProduct())
    }
    return products;
}

module.exports = {
    createRandomProduct,
    randomProductFactory
}