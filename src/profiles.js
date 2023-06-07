const { faker } = require('@faker-js/faker');

function createRandomProfile() {
    const user = {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    gender: faker.person.gender(),
    phoneNumber: faker.phone.number(),
    sex: faker.person.sex(),
    bio: faker.person.bio(),
    newMember: faker.datatype.boolean(),
    }
    return user
}

function randomProfileFactory(number) {
    const users = [];
    for (let i = 0; i < number; i++) {
        users.push(createRandomProfile())
    }
    return users
}

module.exports = {
    createRandomProfile,
    randomProfileFactory,
}