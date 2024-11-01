const balance = 1000000;
console.log(balance)

// this is thenew way to declare and initialize a variable number but it will create object
const number = new Number(2000.5345);
console.log(number)

console.log(balance.toFixed(2))

console.log(number.toPrecision(5))

console.log(balance.toString())

console.log(number.valueOf())

console.log(balance.toLocaleString())
console.log(balance.toLocaleString('en-IN'))

// ======================================Maths=============================

console.log(Math)
console.log(Math.abs(-3))
console.log(Math.sqrt(4))
console.log(Math.pow(4,2))
console.log(Math.round(22.5))
console.log(Math.floor(22.9))
console.log(Math.ceil(22.1))
console.log(Math.max(2,7,4,6,9,8))
console.log(Math.min(2,7,4,6,9,8))

console.log(Math.PI)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const max = 20;
const min = 10

console.log(Math.floor(Math.random()*(max-min+1)+min))

