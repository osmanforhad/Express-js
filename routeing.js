var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.post('/about', (req, res) => {
    res.send("About Page");
});

app.put('/contact', (req, res) => {
    res.send("Contact Page");
});

app.delete('/terms', (req, res) => {
    res.send("Terms Page");
});



app.listen(8000, () => {
    console.log('Server is running on port 8000');
});