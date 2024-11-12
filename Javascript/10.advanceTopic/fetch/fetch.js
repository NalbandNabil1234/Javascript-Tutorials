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

// explaining fetch 

// 1) fetch is an api which returns the promise either resolve or reject

// 2) this promise has 2 handlers one is the onFulfilled and the other is the onreject which are nothing but the callback inside the .then which gets execuited accordingly

// 3) fetch initiates a network request using browser resorces or node resorces and initially the promise state is at the pending state 

// 4) if the req is success then the state or promise is set to fullfilled state and onFulfilled is triggered that means the callback inside the .then is executed (note: if req is success but the error like 404 or some error occurs than that error is handled by the onFulfilled handler and not the onreject handler)

// 5) and if it is not success that means the request is sended but due to some issue like network error then the state of promise is set to rejct and the onReject handler is triggered that means the callback inside the .catch gets executed.