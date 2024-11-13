const user1 = {
    username: 'Nabil',
    loginCount: 10,
    isLoggedIn: true
}
// console.log(user1)

// but suppose we wanted to create this for multiple users then what so it will be difficult to create everything again which is time consuming and first of all not possible as it will consume more memory
// so here comes the concept of oops which is contructor function(new)

// traditional way which is done before the new keyword using function example
// function user(username, loginCount, isLoggedIn){
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn =isLoggedIn
//     return this
// }
// const userOne = user('Nabil', 10, true)
// const userTwo = user('Jakir', 12, false)
// theres a problem what happen is userTwo overwrites the data or value inside the user function so here comes the oops constructor function (new)
// console.log(userOne)

// constructor function(new keyword is used to create a instance of the funtion or the object whichever we are using where the original function or object will never be changed instead a new context is created for use note: this is helpful when multiple programmers are working on project so the data will be not changed)

//example

function userDetails(username, loginCount, isLoggedIn){
        this.username = username
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn
        this.greet = function(msg){
            // return `${msg}, ${this.username}`
            console.log(msg, this.username)
        }
        // return not required now
        // return this ( note return is implicitely done in case of new keyword)
    }
const userOne = new userDetails('Nabil', 12, true)
const userTwo = new userDetails('Jakir', 10, true)
console.log(userOne.greet('hi'))
// now the problem is solved for each user instance of function is given
console.log(userOne)
console.log(userTwo)


// behind the scene of the new keyword and the given program
// step1) firstly the new keyword creates the empty object
// step2) now the context that is this is bound to the newly instance
// step3) now the values that is passed as the arguments for new instance inside the constructor function is assigned or injected to that new instance
// step4) now the value is implicitely returned as the complete object

// .constructor is used to check the constructor of the instance
console.log(userOne.constructor)

// similarly we chack instance of the contructor using instanceof
console.log(userOne instanceof userDetails)