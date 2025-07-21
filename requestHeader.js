var express = require('express');

app = express();

app.get('/', (req, res) => {
    let fName = req.header('firstName');
    let lName = req.header('lastName');

    res.send(fName + " " + lName);
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});