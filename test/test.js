const man = {
  "name": "Bill",
  "species": "human",
  "age": 44,
  "hand": 2,
  "leg": 2,
  "gender": "male",
  "saying": "hello fellas!"
}

const women = {
  "name": "Amanda",
  "species": "human",
  "age": 32,
  "hand": 2,
  "leg": 2,
  "gender": "female",
  "saying": "hello friends!"
}

const cow = {
  "name": "Tiffany",
  "species": "cow",
  "age": 3,
  "hand": 0,
  "leg": 4,
  "gender": "female",
  "saying": "moo"
}



const dog = {
  "name": "Bully",
  "species": "dog",
  "age": 9,
  "hand": 0,
  "leg": 4,
  "gender": "male",
  "saying": "woof-woof"
}

const cat = {
  "name": "Jack",
  "species": "cat",
  "age": 5,
  "hand": 0,
  "leg": 4,
  "gender": "male",
  "saying": "meow"
}

const catWomen = Object.create(cat, {
  name: {value: "Kira"},
  species: {value: "human"},
  age: {value: 35},
  hand: {value: 2},
  leg: {value: 2},
  gender: {value: "female"}
})

console.log(cat)
console.log(catWomen)
console.log(catWomen.name)

// ======== OUTPUT ========
const listPerson = [man, women, cat, cow, catWomen, dog]

function isHasHand(player){
  return `${player.hand ? "I have " + player.hand + ' hand' : "I don't have hand but I have " + player.leg + " leg" }`
}

function showBioPlayer(player){
  return `Hi I'm ${player.name}. My species is ${player.species} and you know ${isHasHand(player)}. My gender is ${player.gender} and I am ${player.age} years old. When I meet with friends, I say ${player.saying}`
}

listPerson.forEach(player => {
  // console.log(showBioPlayer(player))
})

