var http = require("http");
var express = require('express');
var app = express();

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }).listen(process.env.PORT || 8888);

app.get('/', function(req, res) {
  res.send('<!DOCTYPE html><body><h1>Shit</h1></body></html>')

})


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Listening on port', port)
});