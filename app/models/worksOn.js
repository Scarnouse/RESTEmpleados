var connection = require("./connectionDB");

var worksOnModel = {};

//Get employees that are working in proyect
worksOnModel.getWhoWorksOnProyect = function(n_proj, callback){
    if (connection){
        connection.query('SELECT empl.name_empl, empl.surname_empl, work.start_date_proj, work.task FROM EMPLOYEE AS empl INNER JOIN WORKS_ON AS work ON empl.n_empl = work.n_empl AND work.n_proj = ?', n_proj, function(err, rows){
            if(err) throw err;
            callback(rows);
        });
    }
};

//Adding employees to project
worksOnModel.addWorksOn = function(worksOn, callback){
    if(connection){
        var sql_query_n_proj = "SELECT * FROM PROJECT WHERE n_proj = " + connection.escape(worksOn.n_proj);
        connection.query(sql_query_n_proj, function(err, rows){
            
            if(rows.length > 0){
                var sql_query_n_empl = "SELECT * FROM EMPLOYEE WHERE n_empl = " + connection.escape(worksOn.n_empl);
                connection.query(sql_query_n_empl, function (err, row){
                    if(row.length > 0){
                        connection.query('INSERT INTO WORKS_ON SET ?', worksOn, function(err){
                            if(err) throw err;
                            callback({"msg" : "Inserted Employee in Proyect"});
                        });
                    } else {
                        callback({"msg" : "Employee not found"});
                    }
                }) ;              
            } else {
                callback({"msg" : "Project not found"});
            }
        });
        
    }
};

//Updating worksOn table
worksOnModel.updateWorksOn = function(worksOn, callback){
    if(connection){
        connection.query('CALL WORKS_ON_UPDATE(?, ?, ?, ?)', [worksOn.n_proj, worksOn.n_empl, worksOn.start_date_proj, worksOn.task], function(err, result){
            if(err) throw err;
            if (result[0][0].code == "200") callback({"msg" : "Works Updated"});
            else callback({"msg" : "Works Created"});
        });
    }
};

//Deleting worksOn table
worksOnModel.deleteWorksOn = function(worksOn, callback){
    if(connection){
        connection.query("SELECT * FROM WORKS_ON WHERE n_proj = ? AND n_empl = ?", [worksOn.n_proj, worksOn.n_empl], function(err, row){
            if(err) throw err;
            if (row.length > 0){
                connection.query("DELETE FROM WORKS_ON WHERE n_proj = ? AND n_empl = ?", [worksOn.n_proj, worksOn.n_empl], function (err, result){
                    if (err) throw err;
                    else callback({"msg" : "Insertion deleted"});
                });
            } else {
                 callback({"msg" : "Insertion not found"});
            }             
        })
    }
}

module.exports = worksOnModel;