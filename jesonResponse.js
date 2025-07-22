var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//body-parser for work with JSON Data
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

//json respons with get method
app.get('/two', (req, res) => {
    let myJesonArray = [
        {
            "name": "John",
            "age": 30
        },
        {
            "name": "Jane",
            "age": 25
        }
    ];
    res.status(200).json(myJesonArray);
});

//json response with post method
app.post('/three', (req, res) => {
    //fetch request body
    let jsonData = req.body;
    //to display json as output
    let jsonResult = JSON.stringify(jsonData);
    //response body
    res.send(jsonResult);

    //display specific json as output
    let name = jsonData['name'];
    let city = jsonData['city'];
    //response body
    res.send(name + " " + city);

});





app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
