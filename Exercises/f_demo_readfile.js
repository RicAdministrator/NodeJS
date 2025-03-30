// Reads a HTML file, and return the content
// close terminals
// Exercises > Open in Integrated Terminal
// node f_demo_readfile.js
// On your browser, go to http://localhost:8080
// We should see the contents of the html file

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('f_demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);