// // for of
// // easy to use no need of giving condition and start index

// let array = [1,2,3,4,5]
// for (const num of array) {
//     console.log(num)
// }

// // for string
// let name = 'NABIL'
// for (const char of name) {
//     console.log(char)
// }

// // for map
// let map = new Map()
// map.set('name','nabil')
// map.set('sal',500000)
// console.log(map)

// for (const number of map) {
//     // will return in the form of array so for normal val we can use destructure it
//     console.log(number)
// }
// //destructured
// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`)
// }


// // for of for objects (note it wonnt work for object) because it is not iterable
// // let obj = {
// //     name: 'Nabil',
// //     midname: 'Jakir',
// //     surname: 'Nalband'
// // }
// // for (const value of obj) {
// //     console.log(value)
// // }

// // for objects we can use for in loop
// let obj = {
//     name: 'Nabil',
//     midname: 'Jakir',
//     surname: 'Nalband'
// }

// for (const key in obj) {
//     // the proble is it will only return key so the solution is simply use the key rto get the values as sjhown down
//     console.log(`${key} : ${obj[key]}`)
// }

// // for array
// let heros = ['bheem', 'spider man']
// for (const key in heros) {
//     console.log(`${key} : ${heros[key]}`)
// }

// // for string
// let surname = 'Nalband'
// for (const key in surname) {
//     console.log(surname[key])
// }

// // for map

// let map1 = new Map()
// map1.set('name','nabil')
// map1.set('sal',600000)
// console.log(map1)

// for (const key in map1) {
//     console.log(key)
// }


console.log('-----------------------------practice------------------------------')


//for of loop

// let number = [1,2,3,4,5,6,7,8,9,10]
// console.log(number)

// for(let i=0; i<number.length; i++){
//     console.log(number[i])
// }
// for(let val of number){
//     console.log(val)
// }

// for of loop for string
let name = 'Nabil'
// console.log(name)

// for(let i=0; i<name.length; i++){
//     console.log(name[i])
// }

// for(let char of name){
//     console.log(char)
// }


// for map
// let mapp = new Map([['name','nabil'],['midname','jakir']])
// console.log(mapp)

// for (const [key,val] of mapp) {
//     console.log(`${key} : ${val}`)
// }

// for objects
// it wont work so we use for in for objects
// let details = {
//     name: 'nabil',
//     age: '22'
// }
// console.log(details)
// for (const [key, val] of details) {
//     console.log(key + ' ' + val)
// }

// for in in JS

// let details = {
//     name: 'nabil',
//     age: '22'
// }
// console.log(details)

// for (const key in details) {
//     console.log(key + " : " + details[key])
// }

