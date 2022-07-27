const request = require('request');

const weatherData = (address, callback) => {
    const url = process.env.BASE_URL + encodeURIComponent(address )+ "&appid=" + process.env.SECRET_KEY

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('cant feetch data', undefined)
        } else if (!body.main || !body.main.temp) { 
            callback('input a valid location', undefined)
        } else{
            callback(undefined, {
                temperature: body.main.temp,
                cityName: body.name,
                description: body.weather[0].description
            })
        }
    })
}


module.exports =weatherData