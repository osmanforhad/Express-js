var express = require('express');
var multer = require('multer');

var app = express();

//storage setup for uplaoding file
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
});

//upload file through the multer package
var upload = multer({ storage: storage }).single('myfile');

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

//file upload route
app.post('/upload', (req, res) => {
    //handaling file upload operation
    upload(req, res, function (error) {
        if (error) {
            res.send("File Upload Fail");
        }
        else {
            res.send("File Uplaod Success")
        }
    });
});





app.listen(8000, () => {
    console.log('Server is running on port 8000');
});