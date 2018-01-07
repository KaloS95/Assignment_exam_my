//Libraries
const http = require('http');
//parse URL
const url = require('url');
//inspect variables
const util = require('util');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 


app.use('/',function(req, res){
	res.end("hola")
})














 
//listen in a specific port
app.listen(port);
 
//check status
console.log('Server running at port:' + port);