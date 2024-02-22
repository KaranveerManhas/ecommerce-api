const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e_commerce_development') ;  // connect to our database

const db = mongoose.connection;

db.on('error', err => console.error.bind(`Error connecting to database: ${err}`));

db.once('open', () => {
    console.log("Connected to databse");
});

module.exports = db;