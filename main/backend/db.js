const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Harshit:Sanskriti@cluster0.on09pa8.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;