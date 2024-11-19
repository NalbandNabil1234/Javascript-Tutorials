// In Jasvascript every data type can behave as an object.
// like string, Number etc
// for example:

let name = 'Nabil'
console.log(name)

// here we have use the methods of the string object so now js will handle this name as a object temporarily 
// actually what happens is the js will temporarily wraps the primitive string  name to the string object to access methods like touppercase and after the statement is printed then the wrapper is discarded this is called autoboxing
console.log(name.toUpperCase())

// now for function which is a callable object and behaves differently but it is an object
// example:
function multiplyBy5(num){
    return num * 5
}

// trying to add the methods and properties for the function using . which is used for object
multiplyBy5.power = 5
multiplyBy5.printMe = function(name){
    return `Hi, ${name}`
}

// yes it happens because the function is an object
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.printMe('Nabil'))
console.log(multiplyBy5.prototype)

// power of this keyword and new keyword


const createUser = function(username, score){
    // console.log(username)
    // console.log(score)

    // this is very important to give a context to the instances of createUser function
    this.username = username
    this.score = score
    
}
createUser.prototype.incrementScore = function(){
    this.score++
    console.log(this.score)
}

// without the new keyword the work will be not done because the method is available inside the createUser but when we assign it to user1 then the user1 didnt know about it that the createUser has the method so thats why we have to use new keyword which then link the prototype of the createUser to the user1 and user2 basically the objects of it
let user1 = new createUser('Nabil', 24)
let user2 = new createUser('Jakir', 23)

// console.log(user1.incrementScore())

// if the new keyword will not be used and this is used inside the function 
// then in case of the non strict mode the this will be create the variable in the global environment

function userss(names){
    console.log(names)
    // creates a global variable names because new keyword is not used so now this is referring to the global object 
    console.log(this)
    this.names = names

}
let nabil = userss('Nabil')

// names is available in global environment
console.log(names)

// in case of strict mode the this will give undefined