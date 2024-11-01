const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const calculateButton = document.querySelector('button')
    const finalResults = document.querySelector('#results')
    
    //
    // const para = document.createElement('h3')
    // para.setAttribute('id', 'final_result')
    // document.querySelector('')
    //
    if (height === NaN || weight === NaN) {
        calculateButton.innerHTML = '<span>Enter Valid height it is nan</span>'
    } else if (height === 0 || weight === 0) {
        calculateButton.innerHTML = '<span>Enter Valid value it cant be 0</span>'
    } else {
        const result = (weight/((height*height)/10000).toFixed(2))
        finalResults.innerHTML=`the bmi is : ${result}`
    }

})