// import mongoose
const mongoose = require('mongoose')

// create schema
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }
})

const students = mongoose.model("students",studentSchema)
module.exports = students;