const request = require('request')

// const url = 'https://api.darksky.net/forecast/8473a590bc507da7d532f51092069342/37.8267,-122.4233?units=si&lang=es'

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/8473a590bc507da7d532f51092069342/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability*100 + '% chance of rain.')
        }
    })
}

module.exports = forecast