// To rename a file with the File System module,  use the fs.rename() method
// The fs.rename() method renames the specified file

// delete m_renamed_file.txt
// make sure that m_file_to_be_renamed.txt exists
// close terminals
// Exercises > Open in Integrated Terminal
// node m_rename_file_fs_rename.js
// "m_file_to_be_renamed.txt" should be renamed to "m_renamed_file.txt"

var fs = require('fs');

fs.rename('m_file_to_be_renamed.txt', 'm_renamed_file.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});