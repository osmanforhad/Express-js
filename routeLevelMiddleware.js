var express = require('express');

//create express instance
var app = express();


app.get('/', (req, res) => {
    res.send("This is Home Page");
});

app.get('/contact', (req, res) => {
    res.send("This is Contact Page");
});

//Setup rotue Level Middleware
app.use('/about', function (req, res, next) {
    console.log("I am Route Level Middleware used for about");
    next();
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});