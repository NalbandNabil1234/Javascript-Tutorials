// getter and setters using objects which is not used nowadays
let obj = {
    _username: 'Nabil',
    _password: '555bbb',
    get username(){
        return this._username.toUpperCase()
    },
    set username(value){
        this._username = value
    }
}
const Nabil = Object.create(obj)
console.log(Nabil.username)

// updated to function after objects but also not used much
class details {
    constructor(username, password){
        this._username = username
        this._password = password
    }
    get username(){
        return this._username.toUpperCase()
    }
    set username(val){
        this._username = val
    }
}

const Nabil1 = new details('Nabil', 'abbb')
console.log(Nabil1.username)


// recently new and is used in much webapps
function details2(username, password){
    this._username = username
    this._password = password

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(pass){
            this._password = pass
        }
    })
}
const Nabil2 = new details2('Nabil', '555ccc')
console.log(Nabil2.password)