var express = require('express');

app = express();

app.post('/', (req, res) => {
    let fName = req.query.firstName;
    let lName = req.query.lastName;
    res.send(fName + " " + lName);
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});