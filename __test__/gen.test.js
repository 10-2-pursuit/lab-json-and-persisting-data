const { createObj, createArrF } = require("../src/gen.js");

describe("createObj", () => {
    const actual = createObj();
    test('is the obj has _id, title, description, brand, price, inStock, and reviewPoint as properties?', ()=>{
        expect(actual).toHaveProperty('_id', 'title', 'description', 'brand', 'price', 'inStock', 'reviewPoint')
    })
});

describe("createArrF", () => {
    const actual = createArrF(5).length;
    const expected = 5
    test('is it returns the right size of an array?', ()=>{
        expect(actual).toBe(expected);
    })
});