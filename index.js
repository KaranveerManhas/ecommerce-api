const express = require('express');
const port = 3000;
const app = express();
const db = require('./config/db');


app.use('/', require('./routes/api'));

app.listen(port, function(err){
    if(err){
        console.log(err);
    }

    console.log(`Listening on port ${port}`);
});