const request = require("request");

let geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key= AIzaSyA0qjtkFy_2KDkxz5hGKRr1-yAT3meHGFU`,
        json: true
    },(error, response, body) =>{
        
        if(error){
            callback('Unable to connect to Google servers')
        } else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find address')
        } else if(body.status === 'OK'){
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitud: body.results[0].geometry.location.lat,
                longitud: body.results[0].geometry.location.lng,
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress

