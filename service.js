axios.get('https://leonardoapi.onrender.com/songs')
    .then(  (res) => {
       
        res.data.songs.map( (song) => {

            let li = document.createElement('li')
            li.classList.add('flex', 'items-center')

            li.innerHTML = `
                        
            <img src="${song.path.front}" alt=""> class:"h-16">
            <li>
            <p>${song.title}</p>
            </li>

        `

        li.addEventListener('click', )
    
        document.getElementById("track-list").appendChild(li)

        })


    })


    