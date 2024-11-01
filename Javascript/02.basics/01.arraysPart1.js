let arr1 = [1,2,3,4,5,6,7,8,9]
console.log(arr1)
console.log(typeof arr1)

// another way
let arr2 = new Array(1,2,3,4,5,6,7,8,9)
console.log(arr2)
console.log(typeof arr2)

console.log(arr1.push(10,11,12))
console.log(arr1)
console.log(arr1.pop())
console.log(arr1)

console.log(arr1.slice(2,4))
console.log(arr1);
console.log(arr1.splice(2,4))
console.log(arr1);

console.log(arr2.unshift(2))
console.log(arr2);

console.log(arr2.shift())
console.log(arr2)