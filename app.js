const yargs = require('yargs')
const geocode = require('./geocode/geocode')

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
    console.log(JSON.stringify(res, undefined, 2))
  }
})
