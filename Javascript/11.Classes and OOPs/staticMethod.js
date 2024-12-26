// Static method in js is used inside the class on methods to not allow the instances of the class from using that method in which the static keyword is used
// Static is introduced in ES6+

class User {
    constructor(username, phone, email, password){
        this.username = username
        this.phone = phone
        this.email = email
        this.password = password
    }

    printMe(){
        return `Details is : ${this.username}
        ${this.phone}
        ${this.email}
        ${this.password}`
    }

    static validatePassword(){
        return `your Password (${this.password}) is Valid`
    }
}

const user1 = new User('Nabil', 1234568789, 'abc@gmail.com', 5468799781)
console.log(user1)
console.log(user1.validatePassword())
