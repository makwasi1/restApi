const mongoose = require('mongoose'); //import mongoose

const Book = require('./booksJson.js'); //has our schema

// creating the connection
mongoose.connect('mongodb://localhost/books',{userNewUrlParser:true})
const db = mongoose.connection; //est our connection

//checking the connection

db.once('open',() =>{
    console.log("connected");

})
//capturing errors
db.on('error', () =>{
    console.log(err);
})

//insert into our db
const books = new Book({
    title:"jameson",
    author:"johson",
    desc:"drinks"
})
books.save();

Book.find((err,books) =>{
    if(err){
        console.log(err);
    }
console.log(books)
})

