var express = require('express');
var router = express.Router();
var ctrlDepartment = require('../controllers/department');

router.get("/", ctrlDepartment.listDepartments);
router.get("/:n_dept", ctrlDepartment.getDepartment);
router.post("/", ctrlDepartment.newDepartment);
router.put("/:n_dept", ctrlDepartment.updateDepartment);
router.delete("/:n_dept", ctrlDepartment.deleteDepartment);


module.exports = router;