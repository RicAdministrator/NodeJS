// Summary
// Download case using "npm install case" and use it to convert "hello world" into upper-case letters

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Details

// Node.js NPM

// What is NPM?
// NPM is a package manager for Node.js packages, or modules if you like.
// www.npmjs.com hosts thousands of free packages to download and use.
// The NPM program is installed on your computer when you install Node.js
// NPM is already ready to run on your computer!

// What is a Package?
// A package in Node.js contains all the files you need for a module.
// Modules are JavaScript libraries you can include in your project.

// Download a Package
// Downloading a package is very easy.
// Open the command line interface and tell NPM to download the package you want.
// I want to download a package called "case":
// Download "case":
// Exercises > Open in Integrated Terminal
// E:\Git\NodeJS\Exercises>npm install case
// Now you have downloaded and installed your first package!
// NPM creates a folder named "node_modules", where the package will be placed. 
// All packages you install in the future will be placed in this folder.
// My project now has a folder structure like this:
// E:\Git\NodeJS\node_modules

// Using a Package
// Once the package is installed, it is ready to use.
// Include the "case" package the same way you include any other module:
// var uc = require('case');
// Create a Node.js file that will convert the output "hello world" into upper-case letters:

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// close terminals
// Exercises > Open in Integrated Terminal
// node p_download_package_using_npm_and_use_the_package.js
// On your browser, go to http://localhost:8080
// The text "hello world" should now be "HELLO WORLD"

var http = require('http');
var uc = require('case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upper("hello world"));
  res.end();
}).listen(8080);