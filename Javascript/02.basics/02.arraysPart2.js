const heros = ["spider_man", "super_man", "bat_man"]
console.log(heros);

const cartoons = ["doremon", "ben_10", "pickachu", ["hatori", "motupatlu", "bheem"]]
console.log(cartoons);

console.log(heros.push(cartoons))
console.log(heros);

console.log(heros[3][1])

const heros1 = ["hatori", "motupatlu", "bheem"]
console.log(heros1.concat(cartoons))
console.log(heros1+cartoons)

let name1 = "Nabil"
let name2 = "Jakir"
console.log(name1.concat(name2))
console.log(name1+name2)

// spread in js
console.log([...heros, ...cartoons])

// flat is used to make infinite array in a single a array
console.log(heros)
console.log(heros.flat(Infinity))

console.log(Array.isArray(["Nabil"]))

console.log(Array.from("Nabil"))

console.log(Array.of(name1,name2))