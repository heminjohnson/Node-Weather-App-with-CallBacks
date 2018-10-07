const request = require('request')

request({
  //add the right key or the code doesnot work
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (err, res, body) => {
  console.log(`Address: ${body.results[0].providedLocation.location}`)
  console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`)
  console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`)
})
