// cd MySQL
// node i_demo_db_select_fields.js
// As you can see from the result, the fields object is an array containing information about each field as an object.
// Return the name of the second field

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(fields);
    console.log(fields[1].name); // Return the name of the second field
  });
});