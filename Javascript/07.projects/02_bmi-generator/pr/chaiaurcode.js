const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if(height === ''){
        results.innerHTML='<div>Please Enter a value</div>'
    } else if(weight === ''){
        results.innerHTML='<div>Please Enter a value</div>'
    } else if(height <= 0 ){
        results.innerHTML=`<div>Enter Height > 0</div>`
    } else if(weight <= 0 ){
        results.innerHTML=`<div>Enter Weight > 0</div>`
    } else if(isNaN(height)){
        results.innerHTML='<div>Height cant be a NaN</div>'
    } else if(isNaN(weight)){
        results.innerHTML='<div>Weight cant be a NaN</div>'
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML=`<div>${bmi}</div>`

        const newH3 = document.createElement('h3')
        newH3.setAttribute('id','newheading')
        newH3.style.textAlign='center'
        form.appendChild(newH3)
        if(bmi < 18.6){
            newH3.innerText=`Your Bmi is UnderWeight`
        } else if(bmi >= 18.6 && bmi<=24.9){
            newH3.innerText=`Your Bmi is in Normal Range`
        } else if(bmi > 24.9){
            newH3.innerText=`Your Bmi is OverWeight`
        } else{
            newH3.innerText=`Invalid Bmi`
        }     
    }
})
