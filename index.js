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
    return players
}

function run(){
    let players = readJSON("./data", "data.json");
    if(process.argv[3]) {
        players.push(...playerList(process.argv[3]))
    }
    else{  
        players.push(...playerList(1));
    }
    writeJSON("./data","data.json", players);
}


if(process.argv[2] == "create"){ 
    run()
    console.log(`Created object x${process.argv[3]} `)
}

module.exports = {
    createPlayer,
    playerList
}