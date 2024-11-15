
document.querySelector('#button').addEventListener('click', function(e){
    e.preventDefault()
    
    let tenrs = parseInt(document.querySelector('#tenrupees').value) || 0

    let fiftyrs = parseInt(document.querySelector('#fiftyrupees').value) || 0

    let hundredrs = parseInt(document.querySelector('#hundredrupees').value) || 0

    let twohundredrs = parseInt(document.querySelector('#twohundredrupees').value) || 0

    let fivehundredrs = parseInt(document.querySelector('#fivehundredrupees').value) || 0

    let thousandrs = parseInt(document.querySelector('#thousandrupees').value) || 0

    let twothousandrs = parseInt(document.querySelector('#twothousandrupees').value) || 0

    const total = ((10 * tenrs) + (50 * fiftyrs) + (100 * hundredrs) + (200 * twohundredrs) + (500 * fivehundredrs) + (1000 * thousandrs) + (2000 * twothousandrs))

    document.querySelector('#displayTotal').innerHTML=`Total Amount is : ${total} ₹`
})

