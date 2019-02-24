//These are dependencies needed to run the app
var mysql = require("mysql");

//This creates the connection to the local host, my computer
var connection = mysql.createConnection({
    host: "localhost",

    // Your port
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "jake0104",
    database: "burgers_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    
  });

module.exports = connection;

