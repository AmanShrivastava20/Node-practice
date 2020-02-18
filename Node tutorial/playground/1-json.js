const fs = require('fs')

const book ={
    title: 'my name is khan',
    author: 'this is my body'
}

const jsonBook =JSON.stringify(book)

const parseBook = JSON.parse(jsonBook)

fs.writeFileSync('2-json.json', jsonBook)

// const jsonBook =JSON.stringify(book)
// console.log(jsonBook)
// const parseBook = JSON.parse(jsonBook)
// console.log(parseBook.author)

// fs.writeFileSync('1-json.json', jsonBook)

// const databuffer =fs.readFileSync('1-json.json')
// console.log(databuffer)
// const dataJSON =databuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)

////////////////////////////////////////////////////////////////////////
// const dataBuffer= fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const user = JSON.parse(dataJSON)

// user.name ='Gunther'
// user.age=54

// const userJSON = JSON.stringify(user)
// fs.writeFileSync('1-json.json' , userJSON)
