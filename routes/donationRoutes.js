const express = require('express');
const donationController = require('../controllers/donationCtrl');
const { protect } = require('../middleware/authMiddleware');
const AppError = require('../utils/appError')

const router = express.Router(); 


router.get('/donate', protect, donationController.getDonationForm);
router.post('/donate', protect, donationController.makeDonation);

module.exports = router;
