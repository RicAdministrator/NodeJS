// The code below creates a reference to bb_myfirstmodule
// Then calls bb_myfirstmodule.myDateTime() using dt.myDateTime()

// close terminals
// Exercises > Open in Integrated Terminal
// node bc_demo_module.js
// Go to http://localhost:8080

var http = require('http');
var dt = require('./bb_myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);