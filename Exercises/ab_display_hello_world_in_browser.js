// The code below displays "Hello World" in a web browser.
// close terminals
// Exercises > Open in Integrated Terminal
// node ab_display_hello_world_in_browser.js
// Go to http://localhost:8080

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);