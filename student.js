const {faker} = require("@faker-js/faker");

function createRandomStudent() {
    const student = {
        _id: faker.string.uuid(),
        address: {
            buildingNumber: faker.location.buildingNumber(),
            streetName: faker.location.street(),
            city: faker.location.city(),
            State: faker.location.state(),
            zipCode: faker.location.zipCode(),
        },
        age: faker.number.int({min:12, max:19}),
        grade: faker.number.int({min:8, max:12}),
        name: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        },
        passingGrade: faker.datatype.boolean()
    }
    return student;
}

console.log(createRandomStudent());

function randomStudentsFactory(number) {
    const students = [];
    for(let i = 0; i < number; i++) {
        students.push(createRandomStudent());
    }
    return students;
}

console.log(randomStudentsFactory(5))

module.exports = {
    createRandomStudent,
    randomStudentsFactory,
};