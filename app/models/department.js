var connection = require("./connectionDB");

var departmentModel = {};

//Getting all Departments
departmentModel.getDepartments = function(callback){
    if(connection){
        connection.query("SELECT * FROM DEPARTMENT", function(err, rows){
            if(err) throw err;
            callback(rows);
        });
    }
};

//Getting a Department by n_dept
departmentModel.getDepartment = function(n_dept, callback){
    if(connection){
        var sql_query = "SELECT * FROM DEPARTMENT WHERE n_dept = " + connection.escape(n_dept);
        connection.query(sql_query, function(err, row){
            if(err) throw err;
            callback(row);
        });
    }
};

//Adding departments
departmentModel.addDepartment = function(department, callback){
    if(connection){
        connection.query('INSERT INTO DEPARTMENT SET ?', department, function(err, result){
            if(err) throw err;
            callback(result.insertId);
        });
    }
};

//Updating department
departmentModel.updateDepartment = function(department, callback){
    if(connection){
        connection.query('CALL DEPARTMENT_UPDATE(?, ?)', [department.n_dept, department.name_dept], function(err, result){
            if(err) throw err;
            callback({"msg" : "Department Updated"});
        });
    }
};

//Deleting department
departmentModel.deleteDepartment = function(n_dept, callback){
    if(connection){
        var sql_query = "SELECT * FROM DEPARTMENT WHERE n_dept = " + connection.escape(n_dept);
        connection.query(sql_query, function(err, row){
            if(row){
                var sql_delete = "DELETE FROM DEPARTMENT WHERE n_dept = " + connection.escape(n_dept);
                connection.query(sql_delete, function(err, result){
                    if (err) throw err;
                    else callback({"msg" : "Department Deleted"});
                });
            }
        });
    }
};

module.exports = departmentModel;