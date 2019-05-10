
/**
 * Module dependencies.
 */


var express = require('express');
var app = express();

app.get('/', function(req, res){
resp.status(HttpStatus.OK).json("version":"1.0");
});

app.listen(process.env.PORT || 3000);


