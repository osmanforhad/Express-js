var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

app.post('/two', (req, res) => {
    res.status(201).send("This is simple string response");
});

app.get('/three', (req, res) => {
    res.status(401).send("forbidden UnAuthorized access");
});

app.get('/four', (req, res) => {
    res.status(500).send("Internal Server Error");
});

app.get('/five', (req, res) => {
    res.status(404).send("Not found");
});





app.listen(8000, () => {
    console.log('Server is running on port 8000');
});