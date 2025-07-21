var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

app.get('/two', (req, res) => {
    //send data using response header
    res.append("name", "osman forhad");
    res.append("profession", "software developer");
    res.append("city", "Dhaka");
    res.append("age", 32);
    //send data using response body
    res.status(201).send("Hello osman");
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});