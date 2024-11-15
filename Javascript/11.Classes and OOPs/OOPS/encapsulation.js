// Encapsulation is nothing but the one of the concept or key pillar of oops which helps us to hide the data from getting directly accessed by the end user or even the programmer also.
// but yes that data can be accessed through a public method 
// we can use # to make a private data
// example :

class BankAccount {

    // balance is a private field and cant be directly accessed by the instance of this class or the objects of this class but can be accessed using the methods given below
    #balance;

    // constructor function is the one which gets first triggered when the new object is created using the new keyword and all the statements inside it is executed
    // note If no constructor is defined, JavaScript provides a default constructor that does nothing. In our case, we explicitly define the constructor to initialize the `#balance` with the provided `initialBalance` value. Without this constructor, the `#balance` would not be initialized.

    constructor(initialBalance){
        this.#balance = initialBalance
    }

    depositAmount(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Amount Deposited is : ${amount}`)
            console.log(`Balance is : ${this.#balance}`)
        } else{
            console.log('Invalid Amount!')
        }
    }

    withdrawAmount(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdraw Amount is : ${amount}`)
            console.log(`Balance is : ${this.#balance}`)
        } else{
            console.log('Invalid Amount!')
        }
    }

    displayBalance(){
        console.log(`Balance Amount is : ${this.#balance}`);
    }
}

// new keyword creates the object or instance of the class and triggers the constructor methods directly
// given the args to initial balance parameter as because of the new keyword the first this it searches is for the constructor
const Nabil = new BankAccount(1000)

// tried to access but cant because its a private fiield so this is the encapsulation which hides the data and only provide the data which is essential
// console.log(Nabil.#balance)

// this methods allows us to access and update the balance that is private field
Nabil.depositAmount(5000)

Nabil.withdrawAmount(4000)

Nabil.displayBalance()

