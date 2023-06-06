const {
    createUserName,
    checkForDuplicates} = require("./usergeneration.js")
const { writeJSONFile, readJSONFile } = require("./helper");

function run(){
    const username = readJSONFile("userData", "userNameInfo.json");
            // console.log(username)
    if(process.argv[2]){
        username.push(...checkForDuplicates(process.argv[2]))
    } 
    else {
        username.push(createUserName())
    }
    writeJSONFile("userData", "userNameInfo.json", username)
}
                
run()


// var args = process.argv;
// console.log("Total number of arguments are: "+args.length);
// args.forEach((val, index) => {
// console.log(`${index}: ${val}`);
// });