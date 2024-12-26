// Classes is concept which is introduced in js ES6
// it is a syntactic sugar over object most of the thing in js is an Object
// Constructor function is a part of classes which is invoked just after using new keyword on its instance
// its primary use is to intialize the Objects properties when the object or new instance is created using the new Keyword

class User{
    constructor(username, password){
        this.username = username
        this.password = password
    }
    encryptPassword(){
        return `Encrypted Password is ${this.password}abc`
    }
    decryptPassword(){
        return `Decrypted Password is ${this.password}`
    }
    
}

const user1 = new User('Nabil', '123')
console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.decryptPassword())


// behind the scene

function user(username, password){
    this.username = username
    this.password = password
}
user.prototype.encryptPassword = function(){
    return `Encrypted Password is : ${this.password}abc`
}

const newUser = new user('Sahil', 'abc123')
console.log(newUser.encryptPassword())