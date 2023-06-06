const { createObj, createArrF } = require("../src/gen.js");
const _ = require("lodash");

describe("createObj", () => {
    const actual = createObj();
    test('is the obj has _id, title, description, brand, price, inStock, and reviewPoint as properties?', ()=>{
        expect(actual).toHaveProperty('_id', 'title', 'description', 'brand', 'price', 'inStock', 'reviewPoint')
    })
});

describe("createArrF", () => {
    const actual = createArrF(100);
    const expected = 100
    test('is it returns the right size of an array?', ()=>{
        expect(actual.length).toBe(expected);
    });
    test('is it unique?', () => {
        let actual2 = _.uniqBy(actual, (a) => {
            return a._id;
        }).length;
        expect(actual2).toBe(100);
    })
});