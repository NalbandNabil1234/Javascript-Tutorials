const xhr = new XMLHttpRequest()
    // console.log(xhr)

    const link = 'https://api.github.com/users/hiteshchoudhary'
    xhr.open('GET', link)

    let card = document.querySelector('.card')
    xhr.onreadystatechange = function(e){
        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.responseText)
            // console.log(data)
            document.querySelector('#search').addEventListener('click', function(e){
                let image = document.querySelector('#img')
                let hitestimg = data.avatar_url
                image.setAttribute('src',hitestimg)
                image.style.width='100px'
                image.style.width='100px'
                image.style.border='2px solid grey'
                image.style.borderRadius='12px'

                let followers = document.querySelector('#followers')
                followers.textContent=`Followers: ${data.followers}`
                followers.style.fontSize = '12px'

                let bio = document.querySelector('#bio')
                bio.textContent=`${data.bio}`
                bio.style.fontSize='10px'
            })
        }
    }

    xhr.send()