addEventListener("DOMContentLoaded", async function(){
    //grab search params from url after question mark
    const urlparam = new URLSearchParams(window.location.search)
    const songID = urlparam.get('id')
    console.log(songID)

    const response = await fetch("https://m07-tutorial-backend.onrender.com/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ""
    heading += `${song.title} page`
    document.querySelector("h1").innerHTML = heading

    let html = ""
    html+=`
        <h2>Title - ${song.title} </h2>
        <h3>Artist - ${song.artist} </h3>
        <p>Popularity - ${song.popularity} </p>
        <p>Release Date - ${song.releaseDate} </p>
    `
    document.querySelector("div").innerHTML = html
})