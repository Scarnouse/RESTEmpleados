var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    user : "usuario",
    password : "usuario",
    database : "EMPLOYEES"
});

module.exports = connection;