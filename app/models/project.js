var connection = require("./connectionDB");

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
        var sql_query = "SELECT * FROM PROJECT WHERE n_proj = " + connection.escape(project.n_proj);
        connection.query(sql_query, function(err, row){
            if(row.length > 0){
                callback({"msg" : "Project number duplicated"});
            } else {
                var sql_query_name_proj = "SELECT * FROM PROJECT WHERE name_proj = " + connection.escape(project.name_proj);
                connection.query(sql_query_name_proj, function(err, row){
                    if(row.length > 0){
                        callback({"msg" : "Project name duplicate"});
                    } else {
                        connection.query('INSERT INTO PROJECT SET ?', project, function(err, result){
                            if(err) throw err;
                            callback({"msg" : "Project Inserted"});
                        });
                    }
                });
            }
        });  
    }
};

//Updating a project
projectModel.updateProject = function(project, callback){
    if(connection){
        connection.query('CALL PROJECT_UPDATE(?, ?, ?)', [project.n_proj, project.name_proj, project.budget_proj], function(err, result){
            if(err) throw err;
            if (result[0][0].code == "200") callback({"msg" : "Proyect Updated"});
            else callback({"msg" : "Proyect Created"});
        });
    }
};

//Deleting a project
projectModel.deleteProject = function(n_proj, callback){
    if(connection){
        var sql_query = "SELECT * FROM PROJECT WHERE n_proj = " + connection.escape(n_proj);
        connection.query(sql_query, function(err, row){
            if(row.length > 0){
                var sql_delete = "DELETE FROM PROJECT WHERE n_proj = " + connection.escape(n_proj);
                connection.query(sql_delete, function (err, result){
                    if (err) throw err;
                    else callback(result);
                });
            } else {
                callback({"msg" : "Not found"});
            }
        });
    }
};

module.exports = projectModel;