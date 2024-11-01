const buttons = document.querySelectorAll('.button')

const newH2 = document.createElement('h2')

newH2.setAttribute('id','newH2')

buttons.forEach((button) => {
    button.addEventListener('click',function(e){
        const colorForDifferentBox = e.target.id

        const body = document.querySelector('body')

        body.style.backgroundColor = colorForDifferentBox
        
        newH2.textContent = `This is ${colorForDifferentBox}`
        
        const canvas = document.querySelector('.canvas')

        canvas.appendChild(newH2)
        
    })
})