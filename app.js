var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello Express');
});

app.get('/about', function (req, res) {
    res.send('This is all about us');
});

app.listen(port);