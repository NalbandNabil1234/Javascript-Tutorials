// function assignUsername(username) {
//     this.username = username
// }

// // whats happenng here is the username is stored inside the assignUsername because we have not hold the assignUsername context inside the createUser so thats why when the assignUsername function is called it will do the task and gets removed from the call stack so the variables will also get removed which will result in username not getting the printed inside the instance user1
// function createUser(username, email, password) {
//     assignUsername(username)
//     this.email = email
//     this.password = password
// }

// so thats why the Nabil will be stored inside the assignUsername and not get printed inside the user1 instance
// let user1 = new createUser('Nabil', 'Nabil@gmail.com', 123)
// console.log(user1)

// here the .call method comes in picture which is used to explicitely invoke a function and the this args is used to set the this context inside assignUsername
function assignUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    // here the .call is used to explicitely invoke function and the this args sets the this context inside the assignUser so now whenever the instance is created then the username will also be part of that instance because the new this will target to the ionstance which call the object function and not the global object
    assignUsername.call(this, username)
    this.email = email
    this.password = password
}

// now the Nabil will also get printed in user1 instance of the createUser Object
let user1 = new createUser('Nabil', 'Nabil@gmail.com', 123)
console.log(user1)