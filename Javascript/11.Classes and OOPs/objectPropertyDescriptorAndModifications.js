console.log(Math.PI)
// not possible why beacuse it is a hardcoded by default value and there are many check which wont allow us to change
Math.PI = 5
console.log(Math.PI)

// lets check the behind the seen properties of prefefined objects
let predefinedProps = Object.getOwnPropertyDescriptor(Math, 'PI')
// it cant be changed
console.log(predefinedProps)

let obj = {
    name: 'Nabil',
    age: 21
}
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// here we can define our own property
// Object.defineProperties(obj, 'name', {
//     writable: false,
//     enumerable: false
// })

// this way we can define properties of all property in an object using defineProperties method
Object.defineProperties(obj, {
    name:{
        writable: false,
        enumerable: false
    },
    age: {
        writable: false,
        enumerable: false
    }
})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// since we have written writable : false now Jakir will not be printed because the original name is Nabil which cant be changed now because we have define our own property and changed it from default 
obj.name = 'Jakir'
// console.log(obj.name)

// iterable for now but when we define enumera
// for (const key in obj) {
//     console.log(`${key} : ${obj[key]}`)
// }

// now this will not work as we have set enumerable to false so it is now not iterable 
// for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key} : ${value}`)
// }


let obj3 = {
    name: 'Nabil',
    salary: 50000000,
    age: 21,
    designation: 'developer',
    printMe: function(){
        return `${this.name}`
    }
}
// console.log(obj3.printMe())


// this is the case where the code will not looks good so for that we need to apply checks in order to check whether their is function present in the value of keys or not
for (const [key, value] of Object.entries(obj3)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    } else{
        console.log(`${key} : 'function'`)
    }
}
