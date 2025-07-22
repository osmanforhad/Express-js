var express = require('express');

app = express();

//request header with get method
app.get('/', (req, res) => {
    let fName = req.header('firstName');
    let lName = req.header('lastName');

    res.send(fName + " " + lName);
});

//request header with post method
app.post('/two', (req, res) => {
    //request header
    let uName = req.header('userName');
    let uPass = req.header('password');
    //response body
    res.send("User Name: " + uName + " " + "Password: " + uPass);
});


app.listen(8000, () => {
    console.log('Server is running on port 8000');
});