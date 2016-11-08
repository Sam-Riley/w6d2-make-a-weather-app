function weatherData() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=indianapolis,us&units=imperial&APPID=f21c60eaf4b3735aaa9a0c7dff67b7a4')
    .then(function(response) {
        return response.json()

    })
    .then(function(weather) {
        console.log(weather)
    })
}

weatherData()
