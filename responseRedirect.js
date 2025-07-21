var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

app.get('/bangladesh', (req, res) => {
    res.redirect("http://localhost:8000/india");
});

app.get('/india', (req, res) => {
    res.send("This is india");
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});