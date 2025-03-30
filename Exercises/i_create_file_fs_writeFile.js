// The fs.writeFile() method replaces the specified file and content if it exists. 
// If the file does not exist, a new file containing the specified content will be created

// On the code below, fs.writeFile will be used to create a new file.

// make sure that i_created_file.txt does not exists
// close terminals
// Exercises > Open in Integrated Terminal
// node i_create_file_fs_writeFile.js
// i_created_file.txt should be created and the content should be 'Hello content!'

var fs = require('fs');

fs.writeFile('i_created_file.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});