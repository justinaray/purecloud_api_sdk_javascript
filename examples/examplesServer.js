var http = require("http");

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/gen', express.static(__dirname + '/../gen'));

var httpServer = http.createServer(app);

console.log("starting server on port 8085")
httpServer.listen('8085');