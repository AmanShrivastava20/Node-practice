const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')


// const url = 'https://api.darksky.net/forecast/b73201c6064744b942917c605486ec4d/28.6491281,70.651143?units=si&lang=en'

//     request({ url: url, json: true }, (error, response) => {
//         console.log(response.body)
//     if (error){
//         console.log('Unable to connect to the weather service!')
//     } else {
//         console.log( response.body.daily.data[0].summary  +'... It is currently '+ response.body.currently.temperature + ' degree out . ' + 'There is ' + response.body.currently.precipProbability + '% chance of rain.')
//     }


// console.log(response.body.currently)
// console.log( response.body.daily.data[0].summary  +' It is currently '+ response.body.currently.temperature + ' degree out . ' + 'There is ' + response.body.currently.precipProbability + '% chance of rain.')

//    const data = JSON.parse()
//    console.log(data.currently)
// } )

// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW1hbjIwIiwiYSI6ImNrNmx2dm1ncTBqZWoza25xaDdpM3BuNnIifQ.WadC-HfIondZDa3fPMq9ag&limit=1'

// request ({url:geoCodeUrl , json:true } , (error , response) =>{
//    if(error){
//        console.log('Unable to connect to location services!')
//    }else if(response.body.features.length === 0){
//        console.log('unable to find the location')
//     } 
//    else{
//     const latitude =response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude , longitude)

//    }
// })


// ******** calls geocode.js function  *********
// geocode('Boston', (error, data) => {

//    if(error){
//       return console.log(error)
//    }

//     forcast( data.latitude, data.longitude ,(error , forcastData) => {
//       if (error){
//          return console.log(error)
//       }

//       console.log( data.location)
//       console.log(forcastData)

//     })
// })

// ********************* using process for accepting location from command line agrument *********************
const address = process.argv[2]

if (!address) {
    console.log('Please provide an Address!')
} else {
    
    geocode(address, (error, {latitude , longitude , location}) => {

        if (error) {
            return console.log(error)
        }

        forcast(latitude, longitude, (error, forcastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forcastData)

        })
    })
}



// forcast( 44.1545,'-75.7088' ,(error , data) => {
//     console.log('error' , error)
//     console.log('data' , data)

// })