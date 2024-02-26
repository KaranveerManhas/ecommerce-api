// Import environment variables
require('dotenv').config();
// Get the client
const mysql = require('mysql2');

// Create the connection to database
const ecommerce = mysql.createConnection({
    host: process.env.MYSQL_HOSTNAME,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    // database: process.env.MYSQL_DATABASE,
    timezone: 'Z',
    dateStrings: true
});

module.exports = ecommerce;