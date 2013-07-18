var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//added by Tao Wei
var fs = require('fs');
var buffer = fs.readFileSync('index.html','utf8')
console.log(buffer);

var text= buf.toString('utf8');
