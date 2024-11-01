// objects literals

const personOne = {
    name : "Nabil",
    salary : 1000000,
    "address" : "panvel",
    isLoggedIn : true,
    // seee speacial case where spqace is used
    "daysLogged In" : ["monday", "saturday"],
    age : 21
}

// ways to access property in objects
console.log(personOne.name)
console.log(personOne.address)
//but the problem is when we uses special caracters or spaces or start with number then dot is not preferred example

// not works
// console.log(personOne.daysLogged In)

//works so prefer []
console.log(personOne["daysLogged In"])

//dont work because we have to give same how we give ""
console.log(personOne["address"])


// symbools adding in the object

const mySym = Symbol("--->")

const obj = {
    [mySym] : "mysymbol"
}

// the problem is it returns it as string but if we want to give symbol and also get the return as symbol onle then we have to give it [] inside obj
// console.log(obj.mySym);

// perfect
console.log(obj)

personOne.salary = 2000000
console.log(personOne.salary);

// Object.freeze(personOne)
personOne.salary = 3000000
console.log(personOne)


personOne.greeting = function(){
    console.log("hi and welcome")
}
personOne.greeting2 = function(){
    console.log(`hi and welcome, ${this.name}`)
}
console.log(personOne.greeting())
console.log(personOne.greeting2())

