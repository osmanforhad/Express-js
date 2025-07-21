var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

app.post('/two', (req, res) => {
    res.send("This is simple string response");
});




app.listen(8000, () => {
    console.log('Server is running on port 8000');
});