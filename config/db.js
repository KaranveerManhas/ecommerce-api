const mysql = require('mysql2');
const config = require('./mysql');

var response = {
    ecommerce: null
}

async function connectToDB(dbName){
    const connection = await mysql.createConnection(config[dbName]);
    return connection;
}

module.exports.initDB = async function initDB(dbName){
    response[dbName] = await connectToDB(dbName);
}

module.exports.executeQuery = async function executeQuery(query, placeholders, dbName){
    if (!response[dbName]){
        await this.initDB(dbName);
    }

    const [results, fields] = await response[dbName].execute(query, placeholders);
}
