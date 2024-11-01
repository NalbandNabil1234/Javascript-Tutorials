// filter method is used to filter out array based on whatever condition we give 

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // first case where there is no need to write return if we write the statements in one line (i.e implicit return is used)
// let anotherNum = number.filter((num) => num<=5)
// console.log(anotherNum)

// second case where we have to give the explicit return
// let newNum = number.filter((num) => {
//     return num > 5
// })
// console.log(newNum)

// trying this same using a foreach

// number.forEach((num) => {
//     if(num>=5){
//         console.log(num)
//     }
// })

// let newNums = []
// number.forEach( (num) => {
//     if(num>=5){
//         console.log(newNums.push(num))
//     }
// })
// console.log(newNums)

// const booksDetails = [
//     {'category': 'A', 'book1': 'maths', 'price': 200, 'yearOfRelease': 2018},
//     {'category': 'B', 'book2': 'science', 'price': 300, 'yearOfRelease': 2018},
//     {'category': 'A', 'book3': 'algebra', 'price': 300, 'yearOfRelease': 2018},
//     {'category': 'B', 'book4': 'geometry', 'price': 300, 'yearOfRelease': 2018},
//     {'category': 'C', 'book5': 'computer', 'price': 300, 'yearOfRelease': 2018},
// ]

//implicit return
// let booksOfCategoryA = booksDetails.filter((book)=>(book.category==='A' && book.price===200))
// console.log(booksOfCategoryA)

//explicit return
// let booksOfCategoryA = booksDetails.filter((book)=>{
//     return book.category==='A' && book.price===200
// })
// console.log(booksOfCategoryA)

// practice

let books = [
    {book: 'java', price: 2000, genre: 'backend'},
    {book: 'node js', price: 2000, genre: 'backend'},
    {book: 'html', price: 2000, genre: 'frontend'},
    {book: 'css', price: 2000, genre: 'frontend'},
    {book: 'js', price: 2000, genre: 'frontend'},
]
console.log(books)
let genre = 'frontend'

let frontendBooks = books.filter((value) => {
    return value.genre === 'frontend'
})
console.log(frontendBooks)

let names= 'Nabil'
console.log(names)

