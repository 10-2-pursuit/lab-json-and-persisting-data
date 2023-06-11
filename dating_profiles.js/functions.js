const { faker } = require("@faker-js/faker");

function createRandomCougar() {
    const cougar = {
        name: faker.name.fullName(female),
        phoneNumber: faker.phone.number(),
        age: faker.date.birthdate(),
        zodiacSign: faker.person.zodiacSign(),
        location: faker.location.zipCode(),
    }
    return cougar
}

function createRandomGigolo() {
    const gigolo = {
        name: faker.name.fullName(male),
        phoneNumber: faker.phone.number(),
        age: faker.date.birthdate(),
        zodiacSign: faker.person.zodiacSign(),
        location: faker.location.zipCode()
    }
    return gigolo
}

module.exports = {
    createRandomCougar,
    createRandomGigolo
}
