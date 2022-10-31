// 3rd party module
var express = require('express');
var app = express();

// node js own module
var bodyParser = require("body-parser");
const fs = require("fs")


app.use(bodyParser.urlencoded({ extended: false }));

// to open index.html in browser
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// sumit form with post req
app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var password = req.body.password;
    console.log(name,password);
    //send these to db, lets save this in file
    fs.appendFileSync("studentDetails.txt",
    `Name: ${name} , Password: ${password}`)
    res.send(`Name: ${name} , Password: ${password}`)
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});