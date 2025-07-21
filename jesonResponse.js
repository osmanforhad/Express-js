var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

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





app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
