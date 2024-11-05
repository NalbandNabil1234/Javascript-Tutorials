function colorGenerator(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

function startChangingColor(){
    document.body.style.backgroundColor = `${colorGenerator()}`
}

let startInterval;
document.querySelector('#start').addEventListener('click', function(e){
    if(!startInterval){
        startInterval = setInterval(startChangingColor, 1000)
    console.log('start button is pressed')
    }
})

document.querySelector('#stop').addEventListener('click', function(e){
    clearInterval(startInterval)
    console.log('Stopped button is pressed')
    startInterval = ''
})

