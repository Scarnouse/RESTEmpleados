var express = require('express');
var router = express.Router();
var ctrlEmployee = require('../controllers/employee');

router.get("/", ctrlEmployee.listEmployees);
router.get("/:n_empl", ctrlEmployee.getEmployee);
router.post("/", ctrlEmployee.newEmployee);
router.put('/:n_empl', ctrlEmployee.updateEmployee);
router.delete('/:n_empl', ctrlEmployee.deleteEmployee);

module.exports = router;