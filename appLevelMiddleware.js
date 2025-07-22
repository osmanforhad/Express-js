var express = require('express');

//create express instance
var app = express();

//Setup App Level Middleware
app.use(function (req, res, next) {
    console.log("I am Application Level Middleware");
    next();
});


app.get('/', (req, res) => {
    res.send("This is Home Page");
});

app.get('/contact', (req, res) => {
    res.send("This is Contact Page");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});





app.listen(8000, () => {
    console.log('Server is running on port 8000');
});