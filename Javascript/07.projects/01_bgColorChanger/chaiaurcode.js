// first i have created a variable for storing all the span buttons inside it so that i can iterate it using a forEach method

const buttons = Array.from(document.querySelectorAll('.button'))
console.log(buttons)

// here i have use a foreach loop because i wanted to change the bgcolor of the body when the event happen such as click

// buttons.forEach((button) => {

//     // for using the event we first have to use a eventlistener so that it can listen to the event

//     button.addEventListener('click', function(e){

//         // console.log(e.target)
//         const body = document.querySelector('body')
//         const idOfButtons = e.target.id

//         if(idOfButtons === 'grey' || idOfButtons === 'white' || idOfButtons === 'blue' || idOfButtons === 'yellow'){
//             body.style.backgroundColor=idOfButtons
//         }
//         button.innerHTML=`<span>${button.id}`
//     })
// })


// same thing using a for loop

// for(let i=0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', function(e){
//         let body = document.querySelector('body')
//         let colors = e.target.id
//         // console.log(colors)
//         body.style.backgroundColor=`${colors}`
//     })
// }