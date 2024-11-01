const Name = "Nabil"
const age = 21
// dont use the syntax of printing line as given below it is outdated
console.log("My name is " + Name + " and my age is " + age)

// new way is above (it is called string interpolation which means it is a technique which looks nice and comfortable to read)
console.log(`My name is ${Name} and my age is ${age}`)

// another way to create and assign string
const gameName = new String("Clash of Clans")
const count = new Number(25);
console.log(count);
// but the only difgference is it will return its type as object and not the primitive number becuase new operator creates the instance of object
console.log(typeof count);
console.log(gameName)
console.log(gameName.__proto__)

// string functions or methods in js
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())

const email = new String('     abc@gmail.com       ')
console.log(email)

const updatedEmail = email.trim()
console.log(updatedEmail)

console.log(updatedEmail.substring(0, 3))
console.log(updatedEmail.replace('abc', 'Nabil'))

console.log(updatedEmail.replaceAll('a', 'aaa'))

const anotherName = "Nabil Jakir Nalband hi"
console.log(anotherName)
console.log(anotherName.substring(0,5))
const aa = anotherName.split(' ',3)
console.log(aa)
console.log(typeof aa)

console.log(anotherName.indexOf('J'))
console.log(anotherName.charAt(1))

const nn = "nabilnn"
console.log(nn.slice(-5,5))

console.log(nn.includes('nabil'))
console.log(nn.search('a'))
console.log(nn.startsWith('nab'))



