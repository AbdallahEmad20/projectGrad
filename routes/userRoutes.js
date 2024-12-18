const express= require('express')
const userCtrl = require('../controllers/userCtrl')
const authCtrl = require('../controllers/authCtrl')
const { protect } = require('../middleware/authMiddleware');
const { restrictTo} = require('../middleware/authMiddleware')
const {getAdminDashboard ,getOrganizationDashboard} = require('../controllers/userCtrl')
const {updateUserRole} = require('../controllers/userCtrl')

const router = express.Router()

router.post('/signup', authCtrl.register)
router.post('/login' , authCtrl.login)
router.get('/protected-route', protect, authCtrl.protectedRoute)

router.put('/:id/role' , protect , restrictTo('admin'), updateUserRole) 
router.get('/admin-dashboard', protect, restrictTo('admin'), getAdminDashboard);
router.get('/organization-dashboard', protect, restrictTo('organization'), getOrganizationDashboard);
router.post('/logout', protect,authCtrl.logout)
router.post('/forgotpassword', protect,authCtrl.forgotPassword)
router.delete('/:id' , protect,restrictTo('admin') ,userCtrl.deleteUser)
router.get('/getAllUser' , protect, restrictTo('admin'), userCtrl.getAllUser)
router.get('/:id', protect,userCtrl.getUser)
router.patch('/:id',protect , userCtrl.updateUser)

module.exports= router