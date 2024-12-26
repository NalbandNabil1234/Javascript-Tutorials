function printName(name){
    this.name = name
}

function printDetails(name, phone, id){
    printName(name)   
    this.phone = phone
    this.id = id
}

let another = new printDetails('Nabil', 123, 456)
console.log(another)
console.log(name)