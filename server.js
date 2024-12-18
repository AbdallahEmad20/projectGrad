const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const mongoose = require('mongoose');

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION !! Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./middleware/app');

// Handle the case where `DATABASE` is undefined
if (!process.env.DATABASE) {
    throw new Error('DATABASE environment variable not defined in config.env');
}

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
   // useNewUrlParser: true,
  //  useUnifiedTopology: true,
}).then(() => 
    console.log('DB connection is successful'));

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION !! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
