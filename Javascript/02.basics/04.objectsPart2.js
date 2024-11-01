// single ton objects are 
// const obj1 = new Object()

// non single ton objects are declared
// const obj2 = {

// }

// till now we have seen many datatype inside object but not seen obj
const personDetais = {
    name: "Nabil",
    id: 123
}
console.log(personDetais);

// now we will see how object are also declared isnside an objecrt

const userDetails = {
    fullName: {
        firstName: "Nabil",
        lastName: "Nalband",
        id: 123     
    }
}
console.log(userDetails);
console.log(userDetails.fullName.id)

userDetails.fullName.address = "panvel"
console.log(userDetails)

// merging two obj as single

const name ={
    1: "Nabil",
    2: "Jakir",
    3: "Nalband"
}
const names ={
    4: "Nabil",
    5: "Jakir",
    6: "Nalband",
    7: 123,
    Name: "Nabil"
}

// normal but not used not reliable as it combione 2 object with its object enotier syntax
// const allNames = {name,names}

// best way provuide single obj
// const allNames = Object.assign({}, name, names)

// most time used way to combine objects
const allNames = {...name, ...names}
console.log(allNames);

// provide keys of the object in array format
console.log(Object.keys(allNames))

// provide values of the object in array format
console.log(Object.values(allNames))

// provide multiple key and its values of the object in array format
console.log(Object.entries(allNames))

console.log(allNames.hasOwnProperty(6))
// console.log(allNames.propertyIsEnumerable(1))

// how values comes from database
// it comes as the collection of objects in the array
//example
// const databaseUser = [
//     {
//         id: 123,
//         name: "Nabil"
//     }
//     {
//         // so on
//     }
// ]

// we have just printeed this one attriburte of object
console.log(allNames.Name)
// object de-structure
// thisis called object de structure in js which is a conveniant way of extracvting values and assignint ot the variable
const {Name} = allNames
console.log(Name);



