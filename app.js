const yargs = require('yargs')
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs.option({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch the weather',
    string: true
  }
}).help().alias('help', 'h').argv

geocode.geoCodeAddress(argv.address, (err, res) => {
  if(err) {
    console.log(err)
  } else {
    console.log(res.address)
    weather.getWeather(res.Latitude, res.Longitude, (err, weatherResults) => {
      if(err) {
        console.log(err)
      } else {
        console.log(`It is currently ${weatherResults.temperature} and it feels like ${weatherResults.apparentTemparature}`)
      }
    })
  }
})
