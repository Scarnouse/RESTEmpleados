var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "admin",
    database : "EMPLOYEES"
});

var employeeModel = {};

//Getting all employees
employeeModel.getEmployees = function(callback){
    if(connection){
        connection.query("SELECT * FROM EMPLOYEE", function(err, rows){
            if(err) throw err
            callback(rows);
        });
    }
};

//Getting a employee by id
employeeModel.getEmployee = function(n_empl, callback){
    if(connection){
        var sql_query = 'SELECT * FROM EMPLOYEE WHERE n_empl = ' + connection.escape(n_empl);
        connection.query(sql_query, function(err, row){
            if(err) throw err;
            callback(row);
        });
    }
}

//Creating a new employee
employeeModel.addEmployee = function(employee, callback){
    if(connection){
        connection.query('INSERT INTO EMPLOYEE SET ?', employee, function(err, result){
            if(err) throw err;
            callback(result.insertId);
        });
    }
};

//Updating an employee
employeeModel.updateEmployee = function(employee, callback){
    if(connection){
        connection.query('CALL EMPLOYEE_UPDATE(?, ?, ?, ?, ?)', [employee.n_empl, employee.name_empl, employee.surname_empl, employee.start_date_empl, employee.n_dept], function(err){
            if(err) throw err;
            callback({"msg" : "Employee Updated"});
        });
    }
};

module.exports = employeeModel;