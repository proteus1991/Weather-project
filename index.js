const express = require('express')
const request = require('request')

const app = express()

app.get('/weather', function (req, res) {
  var lat = req.query.lat
  var lon = req.query.lon
  var appId = req.query.appId
  var url = `http://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
  request.get(url, function (err, response, body) {
    if (err) {
      res.send('Fuck')
    } else {
      body = JSON.parse(body)
      var temp = Math.round(body.main.temp - 273.15)
      var weather = body.weather[0].main
      res.send(`The temp is ${temp}, weather is ${weather}`)
    }
  })
})

app.use(express.static('public'))

app.get('/something', function (req, res) {
  res.send('blah')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
