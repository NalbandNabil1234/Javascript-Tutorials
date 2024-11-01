// for understanding what is arrow function first we need to understand what is this keyword in js

// obj to understand this keyword
const details = {
    name: 'Nabil',
    roll: 10,
    welcomemessage: function(){
        // this keyword is used to access all the current context variables
        console.log(this)
        return `${this.name}, welcome to the channel`
        // checkingwhat  only this will give inside an object
    }
}
details.welcomemessage()
// here this will return an empty obeject and in browser it wil return window object
console.log(this)

// function one(){
//     let username = 'Nabil'
//     // here this wont work and will return undefined because its a function
//     console.log(this.username)

//     // here only this will give multiple objects
//     console.log(this)
// }
// one()
// same for this
// const two = function(){
//     let username = 'Nabil'
//     // here this wont work and will return undefined because its a function
//     console.log(this.username)

//     // here only this will give multiple objects
//     console.log(this)
// }
// two()

// arrow function 

// const name = () => {
//     name1 = 'Nabil'
//     // same as normal function
//     console.log(this.name1)
//     // but imn arrowfunction this will give empty object
//     console.log(this)
// }
// name()

// case 1
// in this if we are useing {} then we have to give return keyword as explicitly
const Addition = (num1, num2) => {
    return num1+num2
}
console.log(Addition(2, 4))

// in this if we give parenthesis () then automaticallty imopliocit return will work no need to gicve retyuyn ecp,licitely
const AdditionOfTwoNumbers = (num1, num2) => (num1+num2)

console.log(AdditionOfTwoNumbers(2, 4))

const nameOfPerson = (firstName, midName, surName) => (`Name is ${firstName} and Father Name is ${midName} and surname is${surName}`)
console.log(nameOfPerson('Nabil', ' Jakir', ' Nalband'))

// the main use of () is when we want to return some objecvt then we cant jkust return like the given 
const Person = (name) =>{name}  // here () is not used so iot will return undefined
console.log(Person('Nabil'))

const Person1 = (name1) =>({name1: 'Sam'})
console.log(Person1())