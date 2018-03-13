const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs.options({
      a:{
          demand: true,
          alias: 'address',
          describe: 'Address for fetch weather for',
          string: true
        }   
      })
      .help()
      .alias('help','h')  
      .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage)
  }else {
    console.log(results.address)
    
    weather.getWeather(results.latitud, results.longitud, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage)
      }else {
        console.log(`Its currently ${weatherResults.temperature}. But it feels like ${weatherResults.apparentTemperature}`)
      }
    });
  }
});



