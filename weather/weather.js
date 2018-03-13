const request = require("request");

let getWeather = (lat , lng, callback) => {
    request({
            url:`https://api.darksky.net/forecast/b2d51e1e9fac0547d791f7e3507c2952/${lat},${lng}`,
            json: true
        },(error, response, body) =>{ 
          if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
          })}else{
            callback('Unable to fetch weather')
          }
        }); 
}

module.exports.getWeather = getWeather;