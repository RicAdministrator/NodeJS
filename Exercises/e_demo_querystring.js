// Split a web address into readable parts
// close terminals
// Exercises > Open in Integrated Terminal
// node e_demo_querystring.js
// On your browser, go to http://localhost:8080/?year=2017&month=July
// We should get "2017 July"

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);