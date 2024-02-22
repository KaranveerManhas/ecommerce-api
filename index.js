const express = require('express');
const port = 3000;
const app = express();
const database = require('./config/mongoose');



app.use('/', require('./routes/api'));

app.listen(port, function(err){
    if(err){
        console.log(err);
    }

    console.log(`Listening on port ${port}`);
});