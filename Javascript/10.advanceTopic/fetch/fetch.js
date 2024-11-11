// fetch is an api which is most convinient way to make a network request and also receive the response or the error (return promise either resolve or reject) without needing to write the complex code like XMLHttpRequest()

// syntax and basic example
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    let data = response
    return data.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})

// it overcome the limitations of the older xmlHttpReq

