// On the code below, the fs.appendFile() method appends specified content to a file. 
// If the file does not exist, the file will be created

// make sure that g_mynewfile1.txt does not exists
// close terminals
// Exercises > Open in Integrated Terminal
// node g_create_file_fs_appendFile.js
// g_mynewfile1.txt should be created and the content should be 'Hello content!'

var fs = require('fs');

fs.appendFile('g_mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
