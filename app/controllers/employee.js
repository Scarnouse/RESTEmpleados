var employeeModel = require('../models/employee');

module.exports.listEmployees = function(req, res){
    employeeModel.getEmployees(function(data){
        if(data && data.lenght !== 0)
            res.json(data);
        else
            res.status(404).json({"msg" : "No data found"});
    });
};

module.exports.getEmployee = function(req, res){
    var n_empl = req.params.n_empl;
    employeeModel.getEmployee(n_empl, function(data){
        if(data && data.lenght !== 0)
            res.json(data);
        else
            res.status(404).json({"msg" : "Resource not found"})
    });
};

module.exports.newEmployee = function(req, res){
    var employee = req.body;
    employeeModel.addEmployee(employee, function(data){
        if(data && data.length !== 0)
            res.status(201).json({"id" : data});
        else
            res.status(409).json({"msg" : "Existing resource"});
    });
};

module.exports.updateEmployee = function(req, res){
    var employee = {
        "n_empl" : req.params.n_empl,
        "name_empl" : req.body.name_empl,
        "surname_empl" : req.body.surname_empl,
        "start_date_empl" : req.body.start_date_empl,
        "n_dept" : req.body.n_dept
    }
    employeeModel.updateEmployee(employee, function(data){
        if(data && data.lenght !== 0)
            res.status(201).json({"id" : data});
        else
            res.status(409).json({"msg" : "Resource not found"});
    });
};