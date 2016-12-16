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

//Getting employees from department
departmentModel.getEmployeesByDepartment = function(n_dept, callback){
    if(connection){
        var sql_query = "SELECT * FROM EMPLOYEE WHERE n_dept = " + connection.escape(n_dept);
        connection.query(sql_query, function(err, rows){
            if(err) throw err;
            callback(rows);
        });
    }
};

//Adding departments
departmentModel.addDepartment = function(department, callback){
    if(connection){
        var sql_query = "SELECT * FROM DEPARTMENT WHERE n_dept = " + connection.escape(department.n_dept);
        connection.query(sql_query, function(err, row){
            if(row.length > 0){
                callback({"msg" : "Department number duplicate"});
            } else {
                var sql_query_name_dept = "SELECT * FROM DEPARTMENT WHERE name_dept = " + connection.escape(department.name_dept);
                connection.query(sql_query_name_dept, function(err, row){
                    if(row.length > 0)
                        callback({"msg" : "Department name duplicated"});
                    else {
                        connection.query('INSERT INTO DEPARTMENT SET ?', department, function(err, result){
                            if(err) throw err;
                            callback({"msg" : "Department Created"});
                        });
                    }
                });
            }
        });
    }
};

//Updating department
departmentModel.updateDepartment = function(department, callback){
    if(connection){
        connection.query('CALL DEPARTMENT_UPDATE(?, ?)', [department.n_dept, department.name_dept], function(err, result){
            if(err) throw err;
            if (result[0][0].code == "200") callback({"msg" : "Department Updated"});
            else callback({"msg" : "Department Created"});
        });
    }
};

//Deleting department
departmentModel.deleteDepartment = function(n_dept, callback){
    if(connection){
        var sql_query = "SELECT * FROM DEPARTMENT WHERE n_dept = " + connection.escape(n_dept);
        connection.query(sql_query, function(err, row){
            if(row.length > 0){
                var sql_delete = "DELETE FROM DEPARTMENT WHERE n_dept = " + connection.escape(n_dept);
                connection.query(sql_delete, function(err, result){
                    if (err) throw err;
                    else callback({"msg" : "Department Deleted"});
                });
            } else {
                callback({"msg" : "Not found"});
            }
        });
    }
};

module.exports = departmentModel;