var express = require('express');
var app = express();
var final = require('./module.js');


app.get( '/', function(req, res) {
    res.send(final.module());
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});
