const { faker } = require("@faker-js/faker")

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


console.log(playerList(process.argv[2]))

module.exports = {
    createPlayer,
    playerList
}