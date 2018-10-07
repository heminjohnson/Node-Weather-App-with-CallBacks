const request = require('request')

var geoCodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address)

  request({
    //add the right key or the code doesnot work
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=${encodedAddress}`,
    json: true
  }, (err, res, body) => {
    if(err) {
      callback('unable to connect to the servers')
    } else if (body.info.statuscode === 400) {
      callback('please provide an address')
    } else if (body.info.statuscode === 0) {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        Latitude: body.results[0].locations[0].latLng.lat,
        Longitude: body.results[0].locations[0].latLng.lng
      })
    }
  })
}

module.exports.geoCodeAddress = geoCodeAddress
