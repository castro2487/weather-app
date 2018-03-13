const request = require("request");

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key= AIzaSyA0qjtkFy_2KDkxz5hGKRr1-yAT3meHGFU',
    json: true
},(error, response, body) =>{
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Long: ${body.results[0].geometry.location.lng}`);    
});