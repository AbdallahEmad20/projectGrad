const express = require('express')
const User = require('../modules/userModule')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')
const jwt = require('jsonwebtoken');

const register =  async (req,res ,next) => {
    try {
        const { name, email, password , role } = req.body;
        if (!name || !email || !password ) {
            const error = new AppError('All fields are required', 400, 'fail');

            return next(error);
        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            const error = new AppError('User already exists', 400, 'fail');

            return next(error);
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id ,role: newUser.role },
            process.env.JWT_SECRET,  
            { expiresIn: process.env.JWT_EXPIRES_IN }  
        );
        res.status(201).json({
            status: 'success',
            data: { user: newUser ,token }
        });
    } catch (error) {
        next(error);
    }
    
     }  
     const login = async(req,res,next)=> {
        const {email , password} = req.body
        let userexist
        try {
             userexist =await User.findOne({ email})
        }catch(err){
           return res.status(500).json({message:err.message})
        }
        if(!userexist){
            return res.status(400).json({message: " User Not exists"})
        }
        const isPasswordCorrect =bcrypt.compareSync(password, userexist.password)
        if(!isPasswordCorrect) {
            return res.status(400).json({message:"IncorrectPassword"})
        }
        const token = jwt.sign(
            { id: userexist._id , role: userexist.role},
            process.env.JWT_SECRET,  
            { expiresIn: process.env.JWT_EXPIRES_IN }  
        );
        res.status(200).json({
            status: 'success',
            token, 
        });
    }
    const protectedRoute = (req ,res)=> {
        res.status(200).json({
            status: 'success',
            data: 'This is a protected route.',
        });
    };
    

    const logout = (req, res) => {
        res.status(200).json({ status: 'success', message: 'Logged out successfully' });
    };

    const forgotPassword = async (req, res) => {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ status: 'fail', message: 'User not found' });
            }
            const resetToken = crypto.randomBytes(32).toString('hex');
            user.passwordResetToken = resetToken;
            user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
            await user.save();
            // Send resetToken to user's email
            res.status(200).json({ status: 'success', message: 'Password reset token sent to email' });
        } catch (err) {
            res.status(400).json({ status: 'fail', message: err.message });
        }
    };
    
    
    

module.exports= {register , login ,logout , forgotPassword , protectedRoute}