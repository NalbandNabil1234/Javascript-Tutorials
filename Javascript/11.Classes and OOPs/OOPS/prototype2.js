// Q) can we print the actual characters length of the string ?
let name = 'Nabil   '

// ans is yes we can print the actual lenght using trim method first and then using a length property
// console.log(name.trim().length)

// but what if we wanted to use this for all the string datatypes lets see 
String.prototype.actualLength = function(){
    // this will be referrd to the obj which is calling that function (actualLength function)
    console.log(this)
    console.log(`${this.trim().length}`)
}
name.actualLength()
// yes it is possible it is working
'Nalband     '.actualLength()


// lets try creating a methiod which can be used for all Object datatypes

let herosPower = {
    spiderman: 'web',
    ghostRider: 'fire',
    printpower: function(heroName){
        console.log(`the power of ${heroName} is ${this.spiderman}`)
    }
}
herosPower.printpower('spiderman')

// creating the property or method explicitly using prototype property in the Object datatype so that other objects or datatypes can also access the greet method
Object.prototype.greet = function(greetsFrom){
    console.log(`Hi Nabil greetings from ${greetsFrom}`)
}
herosPower.greet('Obj')

// checking whether the greet is available in array now and also whether it is available in string also or not

let arr = [1, 2, 3, 4, 5, 6]
let str = 'Nabil Bhai'
arr.greet('arr')
str.greet('String')
// yes it is accessible in all datatypes

// learning about Prototypal Inheritance in js
let user = {
    gender: 'male',
    accessToClassroom: true
}

let teacher = {
    canTeach: true,
    salary: 50000, 
    // accessing property of user using prototypal inheritance __proto__ (this is outdated but still working we will also learn the new syntax)
    // we can also give a single property access also
    // __proto__: user.accessToClassroom
    __proto__: user

}
console.log(teacher.gender)

// new syntax is using setPrototypeOf() method
let car = {
    wheels: 4,
    hasEngine: true
}

let lamborgini = {
    speed: 480
}


// mordern way to set prototype of a paricular object
Object.setPrototypeOf(lamborgini, car)
console.log(lamborgini.hasEngine)
// it will not work because the car object is not given the properties of the lamborgini so it will return undefined
console.log(car.speed)