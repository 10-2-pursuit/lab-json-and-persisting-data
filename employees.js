const { faker } = require("@faker-js/faker");

function createRandomEmployee() {
  const employee = {
    _idEmployee: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    birthdate: faker.date.birthdate(),
  };
  return employee;
}

function randomEmployeeFactory(number){
    const employees = [];
    for(let i = 0; i < number; i++){
        employees.push(createRandomEmployee())
    }
    return employees
}

module.exports = {
    createRandomEmployee,
    randomEmployeeFactory
}