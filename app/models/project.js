var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    "password" : "admin",
    "database" : "EMPLOYEES"
});

var projectModel = {};

//Getting all projects
projectModel.getProjects = function(callback){
    if(connection){
        connection.query("SELECT * FROM PROJECT", function(err, rows){
            if(err) throw err;
            callback(rows);
        });
    }
};

//Getting a project by Id
projectModel.getProject = function(n_proj, callback){
    if(connection){
        var sql_query = "SELECT * FROM PROJECT WHERE n_proj = " + connection.escape(n_proj);
        connection.query(sql_query, function(err, row){
            if(err) throw err;
            callback(row);
        });
    }
};

//Adding a new project
projectModel.addProject = function(project, callback){
    if(connection){
        connection.query('INSERT INTO PROJECT SET ?', project, function(err, result){
            if(err) throw err;
            callback(result.insertId);
        });
    }
};

//Updating a project
projectModel.updateProject = function(project, callback){
    if(connection){
        connection.query('CALL PROJECT_UPDATE(?, ?, ?)', [project.n_proj, project.name_proj, project.budget_proj], function(err){
            if(err) throw err;
            callback({"msg" : "Project Updated"});
        });
    }
};

//Deleting a project
projectModel.deleteProject = function(n_proj, callback){
    if(connection){
        var sql_query = "SELECT * FROM PROJECT WHERE n_proj = " + connection.escape(n_proj);
        connection.query(sql_query, function(err, row){
            if(row){
                var sql_delete = "DELETE FROM PROJECT WHERE n_proj = " + connection.escape(n_proj);
                connection.query(sql_delete, function (err, result){
                    if (err) throw err;
                    else callback(result);
                });
            }
        });
    }
};

module.exports = projectModel;