// Inheritance means inherinting properties of the parent class in the child class
// the class which inherit the properties is called the child class
// and the class which is inherited is called the parent class#
// we use extends keyword to inherit the properties which is introduced in ES6
// before extends keyword we was using __proto__ or setPrototypeOf() methods
// super keyword is used when you want to use extends in order to inherit the properties of the parent class and if there is separate constructor function available in both the class
class User {

    constructor(username, phone, age){
        this.username = username
        this.phone = phone
        this.age = age
    }

    printMe(){
        return `The Details of User is : ${this.username}, ${this.phone}, ${this.age}}`
    }
}

// we have to user super keyword here or else error will be thrown
class student extends User{
    constructor(username, phone, age){
        super(username, phone, age)
    }
}

const Sahil = new student('Sahil', 1234568970, 18)
console.log(Sahil)
console.log(Sahil.printMe())
