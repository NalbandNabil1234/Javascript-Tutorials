// promise is an object which is used to either perform an async operation or task and return a value after some time or reject it 
// it is like a normal promise that it will either be success or gets failed in future
// in simple promises are used for the actions which takes time to complete like example is reading a file or making a network request

// promise creation part
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        const promise = false
        if(promise === true){
        console.log('Promise task complete')

        // most important to call resolve to connect it with .then beacuse if not called then the state of promise will remain in penduing state
        resolve()
        } else{
            console.log('Promise task is rejected')

            // most imp to call to connect with .catch for reject message
            reject()
        }
    } ,1000)
})
// promise consumption part(.then and .catch are attached for consuming the created promise)

// using .then (for consuming you need to call resolve in the creation phase)
// .then is used to fulfill the promise it is by default fulfilled state 
promiseOne.then(function(){
    console.log('Promise is consumed and is fulfilled')
})
.catch(function(){
    // using .catch (for consuming promise we need to call reject in th creation phase)
    // .catch is used when the promiose is not fulfilled due to condition or error 
    console.log('Promise is consumed but rejected due to condition or error')
})

// second way 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Promise 2 done')
        resolve()
    } ,1000)
}).then(() => console.log('Promise 2 resolved'))

// passing values from the promise creation to the consumed phase
new Promise(function(resolve, reject){
    setTimeout(function(){
        let msg = 'promise 3 completed'
        resolve(msg)
    } ,1000)
}).then(function(msg){
    console.log(msg)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
        resolve({name: 'Nabil', message: "promise four resolved", success: true})
        } else{
        reject("Error: Task is rejected due to error or condition")
        }
    }, 1000)
})

promiseFour.then(function(data){
    // console.log(data)
    return data.message
})
.then(function(msg){
    console.log(msg)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    // finally will always gets executed
    console.log("The promise four is either resolved or rejected")
})

// consuming the promise using async await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({Name: 'Sahil', msg: 'Successful'})
        } else{
            reject('Error: Rejected')
        }
    } ,1000)
})

// handling promise using async/await keyword 
async function consumePromise(){
    try{
        const response = await promiseFive
        console.log(response.msg)
    } 
    catch(error){
        console.log(error)
    }
}
consumePromise()

// making api call using async/await
// async function getDataFromHiteshGitHub(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data)
//     }
//     // the error is automatically returned by the fetch  
//     catch(error){
//         console.log(error)
//     }
// }
// getDataFromHiteshGitHub()

// doing same using .then and .catch
fetch('https://randomuser.me/api')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(){
    console.log('error')
})

