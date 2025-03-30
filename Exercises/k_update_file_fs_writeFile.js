// The fs.writeFile() method replaces the specified file and content 
// Replace the content of the file "k_updated_file.txt"

// check content of "k_updated_file.txt"
// close terminals
// Exercises > Open in Integrated Terminal
// node k_update_file_fs_writeFile.js
// content of "k_updated_file.txt" should be replaced

var fs = require('fs');

fs.writeFile('k_updated_file.txt', 'File was replaced. Current date time is ' + new Date(), function (err) {
  if (err) throw err;
  console.log('Replaced!');
});