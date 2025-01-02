// Earlier getters and setters were used with function before the classes was introduced
function details(username, password){
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
const Nabil = new details('Nabil', '555ccc')
console.log(Nabil.password)

