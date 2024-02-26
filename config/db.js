const mysql = require('mysql2');
const config = require('./config');

var response = {
    ecommerce: null
}

async function connectToDB(dbName){
    const connection = await mysql.createConnection(config.config);
    return connection;
}

module.exports.initDB = async function initDB(dbName = 'ecommerce'){
    response[dbName] = await connectToDB(dbName);
}

module.exports.executeQuery = async function executeQuery(query, placeholders, dbName='ecommerce'){
    if (!response[dbName]){
        await this.initDB(dbName);
    }

    const results = await response[dbName].execute(query, placeholders);

    return results;
}
