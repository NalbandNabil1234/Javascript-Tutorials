// map method is used for performing some operation and returning another array
// means a new array is returned by performing the funnction on each element in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let doubledNumbers = numbers.map((num) => {
    return num * 2
})
// console.log(doubledNumbers)

// chaining
// it means we can use multiple methods or it means calling multiple methods sequentially

let arrNew = numbers
    .filter((num) => {
        return num >= 5
    })
    .map((num) => {
        return num * 2
    })

// console.log(arrNew)

// has a rerturn type
let some = [1,2,3,4,5,6,7,8,9,10]
let somme = some.map((val) => {
    return val*2
})
console.log(somme)

// doesnt return 
let another = some.forEach((val) => {
    return val+2
    // console.log(val+2)
})
console.log(another)