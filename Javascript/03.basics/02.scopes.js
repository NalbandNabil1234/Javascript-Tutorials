// there are two types of scope in JS
// global scope and local or block scope

// var is not used as it is a global scope even if its declared outside any function so is not used

// if (true) {
//     var name = 'Nabil'

    // anything declared inside using let and const then its scoe will be local or we can say blockscope
//     const midName = 'Jakir'
//     let surName = 'Nalband'
//     console.log(midName)
//     console.log(surName)
// }
// printed thats why we ont use var
// console.log(name)
// console.log(midName)
// console.log(surName)

console.log('==================================+==============================')


function detailOne(){
    let name = 'Nabil'
    function detailTwo(){
        let surname = 'Nalband'
        // this will get executed becuae in block scoope the child can access its parent properties
        console.log(`Name is ${name} and surname is ${surname}`)
    }
    detailTwo()
    // it will give error because only chiuld function can access the properties of the parent 
    // console.log(`Name is ${name} and surname is ${surname} this is for outer function the parent`)
}
detailOne()

// one more examople 
if(true){
    let name = 'sam'
    if(name==='sam'){
        let surname = 'khan'
        console.log(`Name is ${name} and surname is ${surname}`)
    }
    // console.log(surname);
}
// console.log(name);

console.log('==========================Interesting========================')
 
// there are two case 
//one is 
// here it will exectute this function
console.log(firstCaseAdditionOfTwoNumbers(2,5))
function firstCaseAdditionOfTwoNumbers(num1, num2){
    return num1+num2
}


// another case
// here it wont get executed because it will give reference error because the function is asssiged to a variable so it wont execute before initialization
console.log(secondCaseAdditionOfTwoNumbers(2, 10))
let secondCaseAdditionOfTwoNumbers = function(num3, num4){
    return num3+num4
}