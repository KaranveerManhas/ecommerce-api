// Get the client
const mysql = require('mysql2');

// Create the connection to database
const test = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manhasdev',
    database: 'test',
    timezone: 'Z',
    dateStrings: true
});

module.exports = test;