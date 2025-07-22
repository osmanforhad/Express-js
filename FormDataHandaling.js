var express = require('express');
var multer = require('multer');

//create multer instance for handaling form data
var multer = multer();


var app = express();
//use multer for parsing multipart/form data
app.use(multer.array());
//use express static
app.use(express.static('public'));


app.post('/two', (req, res) => {
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
});



app.listen(8000, () => {
    console.log('Server is running on port 8000');
});