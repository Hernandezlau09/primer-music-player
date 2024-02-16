axios.get('https://leonardoapi.onrender.com/songs')
    .then(  (res) => {
       
        res.data.songs.map( (song) => {

            let li = document.createElement('li')
            li.classList.add('flex', 'items-center')

            li.innerHTML = `
                        
            <img src="${song.path.front}" alt="" class="h-16">
            <div>
                <p>${song.title}</p>
            </div>

        `

        li.addEventListener('click', () => {
            document.getElementById('song').setAttribute('src', song.path.audio)
            document.getElementById('current-song-img').setAttribute("src", song.path.front)
            document.getElementById('current-song-title').innerHTML = song.title
            document.getElementById('current-song-author').innerHTML = song.author

            
        })
        document.getElementById("track-list").appendChild(li)
        })

        
    })
  