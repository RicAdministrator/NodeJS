// To delete a file with the File System module,  use the fs.unlink() method.
// The fs.unlink() method deletes the specified file

// make sure l_file_to_be_deleted.txt exists
// close terminals
// Exercises > Open in Integrated Terminal
// node l_delete_file_fs_unlink.js
// l_file_to_be_deleted.txt should be deleted

var fs = require('fs');

fs.unlink('l_file_to_be_deleted.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});