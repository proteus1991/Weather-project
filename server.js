const express = require('express')
const request = require('request')

const app = express()

app.get('/weather', function (req, res) {
  var lat = req.query.lat
  var lon = req.query.lon
  var appId = req.query.appId
  var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
  request.get(url, function (err, response, body) {
    if (err) {
      res.send('Connection Error')
    } else {
      body = JSON.parse(body)
      console.log(body)
      var weather = {}
      weather.cTemp = Math.round((body.main.temp - 273.15)) + " °C"
      weather.fTemp = Math.round(((body.main.temp - 273.15) * 9 / 5 + 32)) + " °F"  
      weather.description = body.weather[0].main
      weather.speed = body.wind.speed.toFixed(1) + "m/s"
      weather.cityname = body.name
      weather.icon = "http://openweathermap.org/img/w/" + body.weather[0].icon + ".png"  
      // res.send(`The temp is ${weather.cTemp}, is ${weather.description}, wind is ${weather.speed} in ${weather.cityname}`)
      res.send(weather)
    }
  })
})

app.use(express.static('public'))

// app.get('/something', function (req, res) {
//   res.send('blah')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
