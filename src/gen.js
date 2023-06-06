const { faker } = require("@faker-js/faker");

function createObj(){
    const jsonObj = {
        _id: faker.datatype.uuid(),
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        brand: faker.company.name(),
        price: faker.commerce.price(),
        inStock: faker.datatype.boolean(),
        reviewPoint: faker.datatype.number({ min: 1, max: 10 }),
    }

    return jsonObj;
}

function createArrF(num){
    const arr = [];
    for(let index = 0; index < num; index++){
        arr.push(createObj());
    }
    return arr;
}

module.exports = {
    createArrF,
    createObj,
}