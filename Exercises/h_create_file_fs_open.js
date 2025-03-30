// The fs.open() method takes a "flag" as the second argument, 
// if the flag is "w" for "writing", the specified file is opened for writing. 
// If the file does not exist, an empty file is created:

// On the code below, fs.open() will be used to create a new file.

// make sure that h_mynewfile.txt does not exists
// close terminals
// Exercises > Open in Integrated Terminal
// node h_create_file_fs_open.js
// An empty file named h_mynewfile.txt should be created

var fs = require('fs');

fs.open('h_mynewfile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});