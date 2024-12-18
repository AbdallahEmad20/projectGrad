const mongoose = require('mongoose')
const validator = require('validator')
const crypto = require('crypto');
//const bcrypt = require('bcryptjs');
const userScehma = new mongoose.Schema({
    name:{
        type: String,
        required: [true , 'Please tell us your name!']
    },
    email:{
        type: String,
        required: [true , 'Please provide your email'],
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    role: {
        type: String,
        required: [ false ],
        enum: ['user', 'admin' , 'organization' ],
        default: 'user'
      },
    password:{
        type:String,
        required: [true ,'Please provide your password'],
        minlength:8

    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    createdAt: String
})
userScehma.methods.changedPasswordAfter = function(JWTTimestamp) {
    if (this.passwordChangedAt) {
      const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
      return JWTTimestamp < changedTimestamp;  // If JWT timestamp is before password change timestamp
    }
  
    // If no password changed date is set, assume the password has not been changed
    return false;
  };
  
const User = mongoose.model('User', userScehma)
module.exports = User