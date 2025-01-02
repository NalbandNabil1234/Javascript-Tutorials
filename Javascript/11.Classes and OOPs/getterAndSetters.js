// getters and setters are nothing but a method or a function which is used to control access of the objects properties by applying some checks so that they cant be directly get accessed by anyone, it is just similar to the hash directfields but their use case is different

class accountInfo {
    constructor(email, password){
        this._email = email
        this._password = password
    }
    // if using getter then we have to use setter also else will get error of cant set property
    get password(){
        // _ is nothing but a convention just to make programmers understand that its a private field
        return `${this._password.toUpperCase()}`
    }
    // note that dont use same name of the property same as the constructor function property inside the getter and setters becasue the code will be confused and the call stack exceeded erro will appear this error is called Stack Overflow
    set password(value){
        this._password = value
    }
}

let Nabil = new accountInfo('Nabil@gmail.com', '123abc')
// // this is the issue like anyone can change or see this because it is accessible so here comes getters and setters
console.log(Nabil.password)


