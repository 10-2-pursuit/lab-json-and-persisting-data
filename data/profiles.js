const { faker } = require( "faker-js/faker")

function createRandomProfile() {
    const user = {
    id: faker.datatype.uuid(),
    name: faker.person.fullName(),
    gender: faker.person.gender(),
    upVote: faker.phone.number(),
    sex: faker.person.sex(),
    bio: faker.person.bio(),
    newMember: Boolean,
    }
}

function randomProfileFactory(number) {
    const users = [];
    for (let i = 0; i < number; i++) {
        users.push(createRandomProfile())
    }
    return users
}

module.export = {
    createRandomProfile,
    randomProfileFactory,
}