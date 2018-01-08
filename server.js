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

var assignments = [];



app.get('/find',function(req, res){

	for (var i = assignments.length - 1; i >= 0; i--) {
		res.write(JSON.stringify(assignments[i]))
	}
	res.end()
})


app.get('/find/:id',function(req, res){
	var trovo
	var identif=req.params.id
	for (var i = assignments.length - 1; i >= 0; i--) {
		if(assignments[i].assid==identif){
			trovo=assignments[i]
		}
	}
	res.write(JSON.stringify(trovo))
	res.end()
})


///ass/:id

app.post('/submit',function(req,res){/*
	var json = {
		assid: req.body.assid,
		//url: req.query.url
	}*/
	jsonReceived=JSON.parse(JSON.stringify(req.body))
	assignments.push(jsonReceived)
	res.write("ok")
	res.end()
})

app.put('/modify/:id', function(req,res){
	var trovo
	var identif=req.params.id
	for (var i = assignments.length - 1; i >= 0; i--) {
		if(assignments[i].assid==identif){
			trovo=assignments[i]
		}
	}
	//aggiorna campi...come dovrei fare?
	
	var newparameters=req.body
	trovo=newparameters
	trovo.assid=identif
	assignments.push(trovo)
	res.write(trovo)
	res.end("moifica fatta")
})


app.delete('/delete',function(req, res){
	
	assignments.splice(0)
	res.write(JSON.stringify(assignments))
	res.end()
})
/*
app.delete('/delete/:id',function(req, res){
	
})
*/








 
//listen in a specific port
app.listen(port);
 
//check status
console.log('Server running at port:' + port);