const express = require('express')

const app = express() // creating express application

app.get('' , (req ,res) => {
    res.send('hello express')

})
app.get('/help' , (req ,res) => {
    res.send('help page')

})
app.get('/about' , (req ,res) => {
    res.send([{
        name:'aman',
        age: 50
    },{
        name:'ammy',
        age: 80
    }])

})
app.get('/weather' , (req ,res) => {
    res.send('<h1>Your weather</h1>')

})

//app.com
//app.com/help
//app.com/about

app.listen(3000 , () => {
    console.log('Server is up on port 3000')
})