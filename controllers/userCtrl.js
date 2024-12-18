const express=  require('express')
const mongoose = require('mongoose')
const User = require('../modules/userModule')
const appError = require('../utils/appError')


const getAllUser = async(req, res ,next)=> {
   try {
       const users = await User.find({})
        res.status(200).json({
            status:'success',
            results: users.length,
            data:{
                users
            }
        })
   } catch (err) {
    res.status(404),json({
        status: 'fail',
        message: err
    })
   }
}

const getUser = async(req, res ,next)=> {
   const userId = req.params.id
    try {
        const user = await User.findOne({_id: userId})
        if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
        res.status(200).json({
            status:'success',   
            data:{
                user
            }
        })
    } catch (err) {
        res.status(500),json({
            status: 'fail',
            message: err
        })
    }
}
const deleteUser = async (req ,res , next) =>{
    try { 
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {}
        })
    } catch (err) {
        next(err)
    }
}
const updateUser = async (req, res, next) => {
    try {
        const updates = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, updates, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return next(new appError('User not found', 404));
        }

        res.status(200).json({
            status: 'success',
            data: { user }
        });
    } catch (err) {
        next(err);
    }
};
 const getAdminDashboard = (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Welcome to the admin dashboard!',
    });
  };

  const getOrganizationDashboard = (req, res) => {
    res.status(200).json({
      status: 'success',
      message: 'Welcome to the organization dashboard!',
    });
  };

  const updateUserRole = async (req, res) => {
    try {
        const { role } = req.body; 
        const userId = req.params.id; 

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        user.role = role;
        await user.save();

        res.status(200).json({
            message: 'Role updated successfully.',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
};


module.exports = {getAllUser, getUser , updateUser  , deleteUser 
    , getAdminDashboard , getOrganizationDashboard , updateUserRole}

