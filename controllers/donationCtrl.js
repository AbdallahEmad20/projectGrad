const express = require('express')
const Donation = require('../modules/donationModule'); 
const catchAsync = require('../utils/catchAsync');  
const protect = require('../middleware/authMiddleware');

const getDonationForm = async (req, res, next) => {
    try {
        const donates = await Donation.find({});
        res.status(200).json({
            status: 'success',
            message: 'Donation form is ready',
            data: {
                donates
            }
        });
    } catch (err) {
        res.status(404).json({
          status: 'fail',
          message: err.message
      });
      }
};


const makeDonation = async (req, res, next) => {
  try {
      const newDonation = await Donation.create({...req.body, user: req.user._id});

      res.status(201).json({
          status: 'success',
          data: { newDonation }
      });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message
  });
  }
};

module.exports ={getDonationForm , makeDonation}