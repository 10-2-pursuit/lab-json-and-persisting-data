const {
    createUserName,
    checkForDuplicates} = require("./usergeneration.js")
const { writeJSONFile, readJSONFile } = require("./helper");

function run() {
    const username = readJSONFile("userData", "userNameInfo.json");
    // console.log(username)
    if (process.argv[2]) {
      const newUsername = checkForDuplicates(username, process.argv[2]);
      if (newUsername === "Username is taken") {
        console.log("Username is taken");
        return;
      }
      username.push(newUsername);
    } else {
      username.push(createUserName());
    }
    writeJSONFile("userData", "userNameInfo.json", username);
  }
                
run()


// var args = process.argv;
// console.log("Total number of arguments are: "+args.length);
// args.forEach((val, index) => {
// console.log(`${index}: ${val}`);
// });