const authorsNameContainer = document.getElementById("authors-name")

 fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data =>{
        document.body.style.backgroundImage = `url('${data.urls.full}')`
        authorsNameContainer.innerHTML = `By: ${data.user.name}`
    })

    .catch(err => {
        defaultImg = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjEwNzk0NDI&ixlib=rb-1.2.1&q=80&w=1080"
        document.body.style.backgroundImage = `url('${defaultImg}')`
        authorsNameContainer.innerHTML = ""
    })

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        coinName = data.name
        coinImg = data.image.small
        document.getElementById("crypto-img").src = coinImg
        document.getElementById("crypto-name").innerHTML = coinName
        document.getElementById("crypto-container").innerHTML += 
        `
            <p>💰: ${data.market_data.current_price.eur} €</p>
            <p>☝ 24h: ${data.market_data.high_24h.eur} €</p>
            <p>👇 24h: ${data.market_data.low_24h.eur} €</p>
        `
    })
    .catch(err => console.error(err))

const timeFunction = () =>{
     const now = new Date()
     const current = now.getHours() + ':' + now.getMinutes()
     document.getElementById("time").innerHTML = `<h1 class = "time">${current}</h1>`
        

    }
setInterval(timeFunction, 1000)



navigator.geolocation.getCurrentPosition(position =>{
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`)
    .then(res => {
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        return res.json()
    })
    .then(data =>{
        const weatherIcon = data.weather[0].icon
        const temperature = Math.round(data.main.temp)
        const location = data.name
        document.getElementById("weather-container").innerHTML = `
        <img src = "https://openweathermap.org/img/wn/${weatherIcon}.png">
        <p class="weather">${temperature} C°</p>
        `
        document.getElementById("location").textContent += `${location}`
    })
    .catch(err => console.error(err))
})





