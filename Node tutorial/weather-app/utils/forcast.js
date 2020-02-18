const request = require('request')

const forcast = ( latitude ,longitude ,  callback) => {
    const url = ` https://api.darksky.net/forecast/b73201c6064744b942917c605486ec4d/${latitude},${longitude}/?units=si `
    request({url , json:true } ,( error , {body} ) => {
   if (error){
      callback ('Unable to connect to the server!' , undefined)
   } else if (body.error){
       callback('Unable to find location' , undefined)

   } else {
       callback(undefined , body.daily.data[0].summary  +'... It is currently '+ body.currently.temperature + ' degree out . ' + 'There is ' + body.currently.precipProbability + '% chance of rain.')

   } 
    } )
   
}


module.exports = forcast