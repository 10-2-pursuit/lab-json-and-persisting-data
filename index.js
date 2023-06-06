const { faker } = require("@faker-js/faker")
const { 
    writeJSON,
    readJSON
 } = require("./src/helpers")
const { read } = require("fs")

function createPlayer(){
    const player = {
        _id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        sex: faker.datatype.boolean() ? "male" : "female",
        alive: faker.datatype.boolean(),
        level: faker.datatype.number({min:1, max: 20}),
        highlight: `Tried to ${faker.word.verb(5)} a ${faker.word.noun()}. ${faker.word.interjection()}.`
    }
    return player
}

function playerList(amount) {
    let players = []
    for(let i = 0; i < amount; i++) {
        players.push(createPlayer())
    }
    return players.length > 1 ? players : players[0]
}

function run(){
    let players = readJSON("./data", "data.json");
    // console.log(players);
    if(process.argv[3]) {
        players.push(...playerList(process.argv[3]))
        // return playerList(process.argv[3])
        
    }
    else{  
        //  console.log(playerList(1))
        players.push(playerList(1));
        writeJSON("./data","data.json", players);
    }
    // console.log(players)
}


//  console.log(run())

module.exports = {
    createPlayer,
    playerList
}