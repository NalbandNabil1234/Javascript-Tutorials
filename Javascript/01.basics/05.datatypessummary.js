// datatypes

// 1. primitive --(call by value)
//    string
//    number
//    boolean
//    null
//    undefined
//    symbol
//    bigint

let Name = "Nabil"
console.log(Name);

let age = 21;
console.log(age);

let isEligibleToVote = true;
console.log(isEligibleToVote);

let height = null;
console.log(height);

let address;
console.log(address);

let id = Symbol(123)
console.log(id);

let bigNumber = 1222222n
console.log(bigNumber);



// 2. non primitive datatype or reference type (call by reference)
//    array
//    object
//    function

const names = ["Nabil", "Jakir", "Nalband"]
console.log(names);
console.log(typeof names);

const account = {
    name : "Nabil",
    accnumber : 123
}
console.log(account);
console.log(typeof account);

const message = function(){
    console.log("hello world");
}
console.log(message);
console.log(typeof message);

