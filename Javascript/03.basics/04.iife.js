// IIFE - Immediately invoked function expression
// this function is used to execute the function immediately but the main thing is when iife is used then it will protect the variable from becoming pollutants
// like it limits the visibility of variables
const name1 = 'Nabil'
function namePerson(){
    // here it prints the outside variable
    console.log(name1)
}
namePerson();

// (function name(){
//     // const name1 = 'Nabil'
//     const surname = 'Nalband'
//     // here it wont print because of iife avoid pollutants of the global scope variable(note important definition)
//     console.log(`Name is ${name} and surname is ${surname}`)
// })();

(function nameOfPerson(){
    const name = 'Nabil'
    const surname = 'Nalband'
    console.log(`Name is ${name} and surname is ${surname}`)
})(); // here we need to give ; explicitely at the end if there are two same iife function because it does not know where to end so for ending we have to give ";"

// this are all named iife because we have given name of the function  
(function nameOfPerson(name){
    const surname = 'Nalband'
    console.log(`Name is ${name} and surname is ${surname}`)
})('nabil');

// similarly there is unnamed iife where there is no name of the function
// this is unnamed iife
((name) => {
    const surname = 'Nalband'
    console.log(`Name is ${name} and surname is ${surname}`)
})('nabil');