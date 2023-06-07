const {
    createRandomProfile,
    randomProfileFactory,
} = require("../src/profiles.js");

const profiles = require("../src/profiles.js");

describe("createRandonProfile()", () => {
    it ("should return a profile object with the expected properties", () => {

   const actual = createRandomProfile();
   expect(actual).toHaveProperty('id');
   expect(actual).toHaveProperty('name');
   expect(actual).toHaveProperty('gender');
   expect(actual).toHaveProperty('phoneNumber')
   expect(actual).toHaveProperty('sex')
   expect(actual).toHaveProperty('bio')
   expect(actual).toHaveProperty('newMember')
});
it ('should return an object with seven keys', () => {
    const actual = Object.keys(createRandomProfile()).length;
    const expected = 7;
    expect(actual).toStrictEqual(expected)
});
})

describe ('randomProfileFactory()', () => {
    it ('should return an empty array if no number inputted as parameter', () => {
        const actual = randomProfileFactory()
        const expected = [];
        expect(actual).toStrictEqual(expected)
    })
    it ('should return an  array with the amount of vehicles inputted as parameter', () => {
        const actual = randomProfileFactory(2).length
        const expected = 2;
        expect(actual).toStrictEqual(expected)
    })
})

// id: faker.string.uuid(),
//     name: faker.person.fullName(),
//     gender: faker.person.gender(),
//     phoneNumber: faker.phone.number(),
//     sex: faker.person.sex(),
//     bio: faker.person.bio(),
//     newMember: faker.datatype.boolean(),