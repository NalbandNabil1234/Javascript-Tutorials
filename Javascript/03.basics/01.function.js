// function is created by using function keyword
// function addTwoNumbers(num1, num2){
//    console.log(num1+num2)
// }
// addTwoNumbers(1, 5)

// we will try to store the value of the function in a variable outside it 
// it wont work it will return undefined but the solution is to use return keyword and then try to store the value in a variable 
// const number = addTwoNumbers(1, 5)
// console.log(number);

// return have return the value of num1 + num2 which can now be stored in variable
function addTwoNumbers(num1, num2) {
//   return num1+ num2
// another way is to store 
let number = num1 + num2
return number

// note anything written after return statemenet then it will not get executed
// console.log("Nabil")
}

const number1 = addTwoNumbers(1, 5)
console.log(number1);

// function personLoggedInDetail(username){
//     return `user ${username} is Logged In`
// }
// console.log(personLoggedInDetail('Nabil'))

// but in case if we dont give any arguments then it will return undefined to avoid this we can give a default value so if there is no arguments passed then this default value will be used
// function personLoggedInDetail(username = 'sam'){
//     return `user ${username} is Logged In`
// }
// console.log(personLoggedInDetail())

// thers also way to check by giving condition
function personLoggedInDetail(username){
    if(username === undefined){
        console.log('please enter username')
        return
    }
    return `user ${username} is Logged In`
}
console.log(personLoggedInDetail())

// ================================================

// this ... rest parameter will wrap every value into a single array
function addCartPrice(...price){
    return price
}

// problem is if there comes muliple value from the website and at that time we dont know then we use rest (...) so adding this into our functions parameter
console.log(addCartPrice(200,300,500))

// passing object inside a function

const personDetails = {
    name : 'Nabil',
    midname : 'Jakir',
    surname : 'Nalband'
}

function getPersonDetails(getobject){
    return `Name is ${getobject.name} midname is ${getobject.midname} surname is ${getobject.surname}}}`
}

console.log(getPersonDetails(personDetails))


// passing array inside a function

const arrNames = ['Nabil', 'Jakir', 'Nalband']

function getArrNames(getarray){
    return `Name is ${getarray[0]} midname is ${getarray[1]} and surname is ${getarray[2]}`
}
console.log(getArrNames(arrNames))