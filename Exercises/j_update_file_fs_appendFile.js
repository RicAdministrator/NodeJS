// The fs.appendFile() method appends the specified content at the end of the specified file

// Append "This is my text." to the end of the file "j_updated_file_using_appendFile.txt"
// see the content j_updated_file_using_appendFile.txt 
// close terminals
// Exercises > Open in Integrated Terminal
// node j_update_file_fs_appendFile.js
// ' This is my text.' should be appended

var fs = require('fs');

fs.appendFile('j_updated_file_using_appendFile.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});