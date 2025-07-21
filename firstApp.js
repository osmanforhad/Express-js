var express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hello Express js !');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});