const express = require('express')
const request = require('request')

const app = express()

app.get('/weather', function (req, res) {
  var lat = req.query.lat
  var lon = req.query.lon
  var appId = req.query.appId
  var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
  request.get(url, function (err, response, body) {
    body = JSON.parse(body)
    var weather = {}
    if (err) {
      res.send('Cannot Connect to OpenWeatherMap API')
    } else if (body.cod == 401) {
      weather.cod = body.cod
      weather.message = body.message
      res.send(weather)
      console.log(weather)
    } else {
      weather.cod = body.cod
      weather.cTemp = Math.floor((Math.floor(body.main.temp) - 273.15)) + " °C"
      weather.fTemp = Math.floor(((Math.floor(body.main.temp) - 273.15) * 9 / 5 + 32)) + " °F"
      weather.description = body.weather[0].main
      weather.speed = body.wind.speed.toFixed(1) + "m/s"
      weather.cityname = body.name
      weather.humidity = body.main.humidity + "%"
      weather.icon = "http://openweathermap.org/img/w/" + body.weather[0].icon + ".png"  
      res.send(weather)
    }
  })
})


app.use(express.static('public'))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
