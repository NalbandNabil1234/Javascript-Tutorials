// while loop
// in while loop initialization is done before the loop and increment is done inside the curly brackets 
let i = 1
while(i <= 10){
    console.log(`the index value is ${i}`)
    i++
}

// array exampopke
let array = ['Nabil', 'Jakir', 'Nalband']
let arrStart = 0
while(arrStart < array.length){
    console.log(`Name at index ${arrStart} is : ${array[arrStart]}`)
    arrStart++
}

// do while loop
// here it will execute at least once even if the condition is not true because the work is done before checking the condition intialization  is done before the loop and increment is done inside do and condition is check after the do

let number = 1
do{
    console.log(`Number is : ${number}`)
    number++
}while(number <= 10);

// array example 

let array2 = array
let arr2Start = 0
do{
    console.log(`the name at index ${arr2Start} is : ${array2[arr2Start]}`)
    arr2Start++
}while(arr2Start < array2.length)



