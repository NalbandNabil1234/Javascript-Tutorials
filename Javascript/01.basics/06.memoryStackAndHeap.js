// Memory in js

// Stack - (this memory is used to store all primitive datatypes )

// for example

let user1 = "Nabil";
console.log(user1)

let user2 = user1;
console.log(user2)
// here we have given the copy of user1 variable and if anything chaneges in user2 which is assigned as user1 then if we change user2 then it will reflect on the copy of user1 variable which is assigned to user2(note:"the actual variable user1 will remains the same it wont get affected by user2 change") (this is the concept of memory stack)
user2 = "Nalband";
console.log(user1); // this is how the user1 doesnt get affected in stack memory
console.log(user2);

// Heap memory -(this memory is used to store all non-primitive datatypes)

// for example

let useraccount1 = {
    name : "Nabil",
    accno : 123,
    balance : 200000000
}
console.log(useraccount1)

let useraccount2 = useraccount1;
console.log(useraccount2);

// this is how heap memory work if we assigned useraccount1 valure to useraccount2 and after that if we change the value of useraccount2 then it wwill also reflect in useraccount1 because here the reference is given to useraccount2 and not the copy(note : data is stored in heap and reference is given so if we made changes then it will entirely reflect)
useraccount2.accno = 456;
console.log(useraccount1.accno) // this is how it changed
console.log(useraccount2.accno)


