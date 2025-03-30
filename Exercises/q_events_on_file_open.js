// Node.js Events
// Node.js is perfect for event-driven applications.

// Events in Node.js
// Every action on a computer is an event. Like when a connection is made or a file is opened.
// Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

// close terminals
// Exercises > Open in Integrated Terminal
// node q_events_on_file_open.js
// 'The file is open' should appear

var fs = require('fs');

var readStream = fs.createReadStream('./q_demofile.txt');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  console.log('The file is open');
});