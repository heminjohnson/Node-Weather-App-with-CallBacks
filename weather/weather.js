const request = require('request')

var getWeather = (lat, lng, callBack) => {
  request({
    url: `https://api.darksky.net/forecast/KEY/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callBack('unable to connect to the server')
    } else if (response.statusCode === 400) {
      callBack('unable to fetch weather')
    } else if (response.statusCode === 200) {
      callBack(undefined, {
        temperature: body.currently.temperature,
        apparentTemparature: body.currently.apparentTemperature
      })
    }
  })
}

module.exports.getWeather = getWeather
