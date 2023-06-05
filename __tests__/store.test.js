const { createRandomProduct, randomProductFactory } = require("../store.js");
const productData = require("../data/productData.json");

describe('createRandomProduct()', () => {
    it('should return an id, product, price, and insurance key', () => {
        const actual = createRandomProduct();
        expect(actual).toHaveProperty('id', 'product', 'price', 'insurance');
    });
    it('should return an object with four keys', () => {
        const actual = Object.keys(productData[0]).length;
        const expected = 4;
        expect(actual).toBe(expected);
    });
});


describe('randomProductFactory()', () => {
    it('should return an empty array if a non number is inputted into the array', () => {
        const actual = randomProductFactory("five").length;
        const expected = 0;
        expect(actual).toBe(expected);
    });
    it('should return x amount of products if a number is inputted to the terminal', () => {
        const actual = randomProductFactory(2).length;
        const expected = productData.length;
        expect(actual).toBe(expected);
    });
});