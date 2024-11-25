// Prototype in Js :
// 1) prototype is the mechanism in javascript which allows the objects to inherit the property and methods from each other.
// 2) Js is by default have a prototypal behaviour means that it wont give up, that means if the method is not found for the object then it goes up and search inside the prototype object of it, if not found then again goes up and try to find the method this happens till the null is not found which is last Object.prototype (Note: this process is called prototype chaining)
// 3) prototype is built in mechanism in js, every object has there prototype
// example :
// try this example in the browser you will get the prototype over there
const myObj = {
    name: 'Nabil',
    greet: function(){
        console.log(`Hi ${this.name}`)
    }
}
// console.log(myObj)
// console.log(myObj.greet())
// trying to access the property toString() from the prototype object of the myObj, it works 
// let us understand what happens here when you try to access the toString() property, first it try to find whether the tostring property is avaible inside the object if not then it will try to find the tostring property inside the prototype object so now the property is finded and call it and it gets executed and returns the results else if still not found in case of other property then the undefined is returned this is Prototype Chaining
// console.log(myObj.toString())

// getprototypeof returns protoype of the object
// console.log(Object.getPrototypeOf(myObj))

// protoype of Object.protype is null so its the end of the prototype chain
// console.log(Object.prototype)

// Shadowing Property
// when we create property of the object with the same name as the default property defined in the objects prototype, after we call that property then what happen is first it will look whether the property is available inside the object if yes then the object property will be executed else the property inside the object protype is executed
// example :

const myObj2 = {
    name: 'Nabil',
    greet: function(){
        console.log('Hi Nabil')
    }
} 
// valueOf() method is available inside the Objects Prototype by default
console.log(myObj2.valueOf())

// lets try adding it inside the object explicitely
myObj2.valueOf = function(){
    console.log(`HI ${this.name}`)
}
// yes it works the property of the myObj2 which we have set it explicitely so that means first preference is searching property inside itself 
// same property is also called shadowing the property it is important when we want to configure the property to work as defined
// console.log(myObj2.valueOf())

