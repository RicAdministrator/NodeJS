// cd MySQL
// node h_demo_db_select2.js
// SELECT name, address FROM customers
// Return the address of the third record

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
    console.log(result);
    console.log(result[2].address); // Return the address of the third record
  });
});