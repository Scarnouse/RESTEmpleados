var worksOnModel = require('../models/worksOn');

module.exports.listWhoWorksOnProyect = function(req, res){
    var n_proj = req.params.n_proj;
    worksOnModel.getWhoWorksOnProyect(n_proj, function(data){
        if(data && data.length !== 0)
            res.json(data);
        else
            res.status(404).json({"msg" : "No data found"});
    });
};

module.exports.newWorksOn = function(req, res){
    var worksOn = req.body;
    console.log(req.body);
    worksOnModel.addWorksOn(worksOn, function(data){
        if(data.msg === "Project not found")
            res.status(404).json(data);
        else if(data.msg === "Employee not found")
            res.status(404).json(data);
        else
            res.status(201).json(data);
    });
};

module.exports.updateWorksOn = function(req, res){
    worksOn = {
        "n_proj" : req.params.n_proj,
        "n_empl" : req.body.n_empl.toString(),
        "start_date_proj" : req.body.start_date_proj,
        "task" : req.body.task
    };
    worksOnModel.updateWorksOn(worksOn, function(data){
        if(data && data.length !== 0)
            res.status(201).json(data);
        else
            res.status(409).json({"msg" : "Resource not found"});
    });
};

module.exports.deleteWorksOn = function(req, res){
    worksOn = {
        "n_proj" : req.params.n_proj,
        "n_empl" : req.body.n_empl.toString()
    }
    
    worksOnModel.deleteWorksOn(worksOn, function(data){
        if(data && data.length !== 0)
            res.status(201).json(data);
        else
            res.status(409).json({"msg" : "Resource not found"});
    });
}