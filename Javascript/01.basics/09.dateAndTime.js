let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.getFullYear())
console.log(date.getMonth()+1)

let newDate = new Date(2024, 0, 20)
console.log(newDate);
console.log(newDate.toDateString());

let newDate1 = new Date('2024,01,20')
console.log(newDate1);

let nnewDate = Date.now()/1000
console.log(nnewDate)
console.log(nnewDate.toFixed())

// newDate1.toLocaleString('default',{
    
// })
// console.log(newDate1);