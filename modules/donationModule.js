const mongoose = require('mongoose')
const validator = require('validator')
const AppError = require('../utils/appError')

const donateScehma = new mongoose.Schema({
    name:{
        type: String,
        required: [true , 'Please tell us your name!']
    },
    address1:{
        type: String,
        required: [true , 'Please provide your address'],
        unique: true,
        
    },
    photo: String,
    address2:{
        type:String,
        required: [false ],
    },
   
    createdAt: String
})
const Donate = mongoose.model('Donate', donateScehma)
module.exports = Donate