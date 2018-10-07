const request = require('request')
const yargs = require('yargs')

const argv = yargs.option({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch the weather',
    string: true
  }
}).help().alias('help', 'h').argv

var encodedAddress = encodeURIComponent(argv.address)

request({
  //add the right key or the code doesnot work
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=${encodedAddress}`,
  json: true
}, (err, res, body) => {
  console.log(`Address: ${body.results[0].providedLocation.location}`)
  console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`)
  console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`)
})
