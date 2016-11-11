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
        connection.query('INSERT INTO WORKS_ON SET ?', worksOn, function(err){
            if(err) throw err;
            callback({"msg" : "Insert Employee in Proyect"});
        });
    }
};

//Updating worksOn table
worksOnModel.updateWorksOn = function(worksOn, callback){
    if(connection){
        connection.query('CALL WORKS_ON_UPDATE(?, ?, ?, ?)', [worksOn.n_proj, worksOn.n_empl, worksOn.start_date_proj, worksOn.task], function(err, result){
            if(err) throw err;
            callback({"msg" : "WorksOn Updated"});
        });
    }
};

module.exports = worksOnModel;