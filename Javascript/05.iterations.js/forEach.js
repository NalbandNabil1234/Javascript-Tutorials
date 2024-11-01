// foreach is a method available for array that allows you to iterate over each element in an array

let names = ['Nabil', 'Jakir', 'Nalband']
// it takes three args val index and entire array
// names.forEach(function (val, index, arr){
//     console.log(val)
// break wont work here biut if we wanted to breakthrough then we have to throw some exception
//     // break
//     console.log(index)
//     console.log(arr)
// } )

// converting a for loop to foreach loop

let items = ['pen', 'pencil', 'rubber']
let bag = []

// for(let i=0; i<items.length; i++){
//     bag.push(items[i])
// }
// console.log(items)
// console.log(bag)

// // for each doesnt return anything 
// items.forEach( function (i){
//     return bag.push(i)
//     // console.log(bag.push(i))
// })

// console.log(items)
// console.log(bag)

// // we can also define the function outside the foreach and give the reference of it inside foreach to execute 
// function fullName(name) {
//     console.log(name)
// }
// // note no need to give ()
// names.forEach(fullName)

// // iterating array of objects
// let Coding = [
//     {
//         codename: 'java',
//         codetitle: 'java'
//     },
//     {
//         codename: 'javascript',
//         codetitle: 'js'
//     },
//     {
//         codename: 'python',
//         codetitle: 'py'
//     }
// ]

// Coding.forEach((val) => {
//     console.log(val.codename)
// })

// important case

// for each doesnt return anything

// const students = ['nabil', 'jakir', 'nalband']
// const upadatedStudents = []

// students.forEach((val) => {
//     return upadatedStudents.push(val)
//     // console.log(upadatedStudents.push(val))
// })
// console.log(upadatedStudents)

let values = [1,2,3,4,5,6]
let val2 = values.forEach((val) => {
    console.log(val*2)
    // return val+2
})
console.log(val2)

// let fullNames = ['nabil','jakir','nalband']
// console.log(fullNames)
// let detail = fullNames.forEach((val,index) => {
//     console.log(index + " : " + val)
// })

// console.log(detail)