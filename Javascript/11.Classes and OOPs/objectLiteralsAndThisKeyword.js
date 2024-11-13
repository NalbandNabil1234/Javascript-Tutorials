// Object Literals :
// object literals are nothing but literally an object which is denoted by {}, it is a collection of properties and merthods 
// example below:
const obj1 = {
    username: 'Nabil',
    loginCount: 10,
    isLoggedIn: true,
    greet: function(msg){
        console.log(`${msg}, ${this.username}`)

        //this refers to the current context like here the current context is properties inside the obj1
        // console.log(this)
    }
}
console.log(obj1.greet('Good Morning'))

// here the current context is empty object
console.log(this)

// but in the browser or node they are having multiple methods and properties of it as it returns a window object