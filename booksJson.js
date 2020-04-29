//create a schema tha defines our data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the schema
const bookSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    author:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    }
})

//this used to export the db.
const Book = module.exports= mongoose.model('Book',bookSchema)