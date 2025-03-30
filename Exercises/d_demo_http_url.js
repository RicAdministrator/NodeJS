// Summary:
// Output the query string
// If url is http://localhost:8080/summer, output will be "/summer"

/////////////////////////

// Detailed:
// Read the Query String
// The function passed into the http.createServer() has a req argument that represents 
// the request from the client, as an object (http.IncomingMessage object).
// This object has a property called "url" which holds the part of the url that comes after the domain name:

/////////////////////////

// close terminals
// Exercises > Open in Integrated Terminal
// node d_demo_http_url.js
// On your browser, go to http://localhost:8080/summer
// We should get "/summer"
// On your browser, go to http://localhost:8080/winter
// We should get "/winter"

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url); // url property - holds the part of the url that comes after the domain name
  res.end();
}).listen(8080);