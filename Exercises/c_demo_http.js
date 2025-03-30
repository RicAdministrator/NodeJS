// Access the http module using require
// Use http.createServer
// Display 'Hello World!'

// close terminals
// Exercises > Open in Integrated Terminal
// node c_demo_http.js
// Go to http://localhost:8080

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080