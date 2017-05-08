// INICIALIZACIÓN DE SERVIDOR PRIMER TEST
/*
var http = require("http");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end('Hello World!\n');
}).listen(8082);
console.log("Server runing at port 8082");
*/

// INICIALIZACIÓN DE SERVIDOR CON EXPRESS.JS
var express = require('express');
var app = express();
app.use(express.static('public'));
/*
app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
*/
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
app.listen(8082, function () {
  console.log('Example app listening on port 8082!');
});

// LEER FICHEROS
// Code Blocking
var fs = require("fs");
var data = fs.readFileSync('public/input.txt');
console.log(data.toString());
console.log("program Ended");
// Non Blocking Code
fs.readFile('public/input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended 2");