// for loop syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for(let i = 1; i <= 10; i++){
    console.log(i)
}

// print tables from 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(`Table of number : ${i}`)
    for(let j = 1; j <= 10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

// similarly if we want to iterate array then
let myArray = ['Nabil', 'Jakir', 'Nalband']
for (let i = 0; i < myArray.length; i++) {
    console.log(`Name at index ${i} is : ${myArray[i]}`)
}

// for loop with condition
// let favNumber = 5;
// for (let i = 1; i < 20; i++) {
//     if(i == favNumber){
//         console.log(`fav number is found at index ${i} is ${favNumber}`)
//     }
//     console.log(i)
// }

// break keyword
// break will exit the loop once it is encountered
// let favNumber = 5;
// for (let i = 1; i < 20; i++) {
//     if(i == favNumber){
//         console.log(`fav number is found at index ${i} is ${favNumber}`)
//         break
//     }
//     console.log(i)
// }

//continue keyword
// continue keyword will skip the current iteration and will resume its work
let favNumber = 5;
for (let i = 1; i <= 20; i++) {
    if(i == favNumber){
        console.log(`fav number is found at index ${i} is ${favNumber}`)
        continue
    }
    console.log(i)
}