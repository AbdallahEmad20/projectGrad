const express = require('express');
const app = express();
const userRoutes = require('../routes/userRoutes')
const donateRoutes = require('../routes/donationRoutes')
const dotenv = require('dotenv')
const uploadRoutes = require('../routes/uploadRoutes')

app.use(express.json())
dotenv.config()

app.use('/api/images' , uploadRoutes);
app.use('/api/users', userRoutes);
app.use('/api/donates', donateRoutes);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    res.status(statusCode).json({
        status: status,
        statusCode: statusCode,
        message: err.message || 'Something went wrong!',
        details: {
            path: req.originalUrl,
            method: req.method
        },
        timestamp: new Date().toISOString()
    });
});



module.exports = app; 
