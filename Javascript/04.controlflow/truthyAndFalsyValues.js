// falsey valuues are 
// 0, false, '', -0, bigint ka 0n, null, undefined, NaN

// truthy values (all the rest are truthy values)
// '0', 'false', [], {}, ' ', 1, true, function(){}, etc

let any = NaN
if(any){
    console.log('is true')
} else{
    console.log('falsy value')
}

// to check whether the array is empty or not then we have to use length
let arr1 = []
if(arr1.length===0){
    console.log('is empty');
}

// to check whether the object is empty or not then we have to use length
// let obj1 = {}
// in this case we have to use Object constructor so that it will return an array then we can check its length
// if(obj1.length==0){
//     console.log('is empty');
// } else{
//     console.log('not empty');
// }
let obj1 = {}
if(Object.keys(obj1).length===0){
    console.log('is empty');
} else{
    console.log('not empty');
}

// nullish coalwesing operator
// it is used when we dont want to take in case of null and undefined 
let val1
val1 = null ?? 12
console.log(val1)

let val2 = undefined ?? 10
console.log(val2)

// ternary operator ?
// it is simple samll syntax of if

let age = 20
age == 20 ? console.log('Eligible to vote') : console.log('not eligible to vote')