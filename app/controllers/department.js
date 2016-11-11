var departmentModel = require('../models/department');

module.exports.listDepartments = function(req, res){
    departmentModel.getDepartments(function(data){
        if (data && data.length !== 0)
            res.json(data);
        else
            res.status(404).json({"msg" : "No data"});
    });
};

module.exports.getDepartment = function(req, res){
    var n_dept = req.params.n_dept;
    departmentModel.getDepartment(n_dept, function(data){
        if(data && data.length !== 0)
            res.json(data);
        else
            res.status(404).json({"msg" : "No data"});
    });
};

module.exports.newDepartment = function(req, res){
    var department = req.body;
    departmentModel.addDepartment(department, function(data){
        if(data && data.length !== 0)
            res.status(201).json({"id" : data});
        else
            res.status(409).json({"msg" : "Existing resource"});
    });
};

module.exports.updateDepartment = function(req, res){
    var department = {
        "n_dept" : req.params.n_dept,
        "name_dept" : req.body.name_dept
    };
    departmentModel.updateDepartment(department, function(data){
        if(data && data.length !== 0)
            res.status(200).json(data);
        else
            res.status(404).json({"msg" : "Resource not found"});
    });
};

module.exports.deleteDepartment = function(req, res){
    var n_dept = req.params.n_dept;
    departmentModel.deleteDepartment(n_dept, function(data){
        if(data && data.length !== 0)
            res.status(200).json(data);
        else
            res.status(404).json({"msg" : "Resource not found"});
    });
};