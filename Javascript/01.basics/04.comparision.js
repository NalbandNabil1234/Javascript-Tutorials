// >
console.log(6>5);

// <
console.log(6<7);

// >=
console.log(7>=7);

// <=
console.log(5<=6);

// == (loose equaluality operator ) here the javascript will just check whether both are same without its type
//it means that js performs coersion before checking whther equal or not
console.log("5" == 5);

// === (strict equality operator) both datatype and character or numbers are checked
console.log("5" === 5)

// != it will just check whether the value is equal or not no matter what datatype it is just condition is both should be equal
console.log(5 != 6)

// !== here" not equal value and not equal datatype " which means it will check whether value is not eqaual plus its datatype shoukd also be not equal
console.log("5" !== 5)


console.log(null == 0)
console.log(null > 0)

// here null is coerced to 0 because we have use >= just for this case 
console.log(null >= 0)

// null is equal to undefined
console.log(null == undefined)

