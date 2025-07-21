var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

app.get('/two', (req, res) => {
    //set response cookie
    res.cookie('name', 'osman');
    res.cookie('city', 'feni');
    res.cookie('age', 32);
    //set response body
    res.send("cookie set success");
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});