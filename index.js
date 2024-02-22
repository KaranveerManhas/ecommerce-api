const express = require('express');
const port = 3000;

const app = express();




app.get('/', (req, res) => {
    res.send("Ecommerce API");
})

app.listen(port, function(err){
    if(err){
        console.log(err);
    }

    console.log(`Listening on port ${port}`);
});