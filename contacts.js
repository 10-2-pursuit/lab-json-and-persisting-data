const { faker } = require("@faker-js/faker");

function createRandomContact() {
    const contact = {
        name: faker.name.fullName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email()
    }
    return contact
}

function randomContactFactory(num) {
    const contacts = [];
    for (i = 0; i < num; i++) {
        contacts.push(createRandomContact())
    }
    return contacts
}


module.exports = {
    createRandomContact,
    randomContactFactory
}