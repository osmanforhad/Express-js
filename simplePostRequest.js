var express = require('express');

app = express();

app.post('/', (req, res) => {
    res.send("This is simple post request");
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});