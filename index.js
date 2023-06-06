const { createRandomContact, randomContactFactory } = require("./contacts")
const { writeJSONFile, readJSONFile } = require("./helpers");

function run() {
    let contactArr = readJSONFile(".", "contact-info").filter(contact => contact.email)
    if (process.argv[2]) {
        contactArr.push(...randomContactFactory(process.argv[2]))
    } else {
        contactArr.push(createRandomContact())
    }
    writeJSONFile(".", "contact-info", contactArr)
}

run()