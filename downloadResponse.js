var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send("This is simple string response");
});

//download response
app.get('/download', (req, res) => {
    res.status(200).download("./uploads/abc.png");
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});