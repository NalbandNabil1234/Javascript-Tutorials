// // reduce method in js is a power method of array it processes the array and will return a single Value

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // reduce is eay method if we want to add or tottal the amount
// // but the problem is acc doesnt know where to start so we need to initialise it with 0 or something accodingly reduce takes 4 args the second third and fourth is same as the map and filter but the first one is the accumulator so we have to initialize it

// // two wasy to initialize accumulator is first is create a variable and include that variable

// // let initialVal = 0
// // let totNums = nums.reduce((acc, currvalue) => {
// //     return acc + currvalue
// //     // here instead of giving a direct 0 we have assigned it to a variable and then addded that variable 
// // }, initialVal)
// // console.log(totNums)

// // let totNums = nums.reduce((acc, currvalue) => {
// //     return acc + currvalue
// // },0)
// // console.log(totNums)

// // implicit return 
// const totalVal = nums.reduce((acc, curval) => acc + curval, 0)
// console.log(totalVal)

// // one real life example where reduce is used

// const shoppingCart = [
//     {
//         book: 'js',
//         price: 999
//     },
//     {
//         book: 'python',
//         price: 499
//     },
//     {
//         book: 'java',
//         price: 10999
//     },
//     {
//         book: 'ruby',
//         price: 10999
//     },
//     {
//         book: 'dsa',
//         price: 9999
//     },
// ]
// // const sumOfTheCart = shoppingCart.reduce((acc, curval) => {
// //     return acc + curval.price
// // }, 0)
// // console.log(sumOfTheCart)

// const totalll = shoppingCart.reduce((acc, curval) => {
//     return acc+curval.price
// },0)
// console.log(totalll)

let array1 = [5,2,3,4,5]
console.log(array1)

let array2 = array1.reduce((acc, curr_val) => {
    return acc+curr_val
},0)
console.log(array2)

const shoppingCart = [
        {
            book: 'js',
            price: 999
        },
        {
            book: 'python',
            price: 499
        },
        {
            book: 'java',
            price: 10999
        },
        {
            book: 'ruby',
            price: 10999
        },
        {
            book: 'dsa',
            price: 9999
        },
    ]

    const totalPrice = shoppingCart.reduce((acc, curval) => {
        return acc + curval.price
    },0)

    console.log(totalPrice)