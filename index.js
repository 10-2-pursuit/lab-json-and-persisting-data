const { createRandomEmployee, randomEmployeeFactory } = require("./employees");
const { writeJSONFile, readJSONFile } = require("./helpers");

function run(){
    const employees = readJSONFile("./data", "employee.json");
    console.log(employees)
    if(process.argv[3]){
        employees.push(...randomEmployeeFactory(process.argv[3]))
    } else {
        employees.push(createRandomEmployee())
    }
    writeJSONFile("./data", "employee.json", employees)
}

run()