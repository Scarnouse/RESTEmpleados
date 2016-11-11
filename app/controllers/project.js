var projectModel = require('../models/project');

module.exports.listProjects = function(req, res){
    projectModel.getProjects(function(data){
        if(data && data.length !== 0)
            res.json(data);
        else
            res.status(404).json({"msg" : "No data found"});
    });
};

module.exports.getProject = function(req, res){
    var n_proj = req.params.n_proj;
    projectModel.getProject(n_proj, function(data){
        if(data && data.length !== 0)
            res.json(data);
        else
            res.status(404).json({"msg" : "No data found"});
    });
};

module.exports.newProject = function(req, res){
    var project = req.body;
    projectModel.addProject(project, function(data){
        if(data && data.length !== 0)
            res.status(201).json({"id" : data});
        else
            res.status(409).json({"msg" : "Existing resource"});
    });
};

module.exports.updateProject = function(req, res){
    var project = {
        "n_proj" : req.params.n_proj,
        "name_proj" : req.body.name_proj,
        "budget_proj" : req.body.budget_proj
    };
    projectModel.updateProject(project, function(data){
        if(data && data.length !== 0)
            res.status(200).json(data);
        else
            res.status(404).json({"msg" : "Resource not found"});
    });
};

module.exports.deleteProject = function(req, res){
    var n_proj = req.params.n_proj;
    projectModel.deleteProject(n_proj, function(data){
        if(data && data.length !== 0)
            res.status(200).json(data);
        else
            res.status(404).json({"msg" : "Resuource not found"});
    });
}