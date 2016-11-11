var express = require('express');
var router = express.Router();
var ctrlProject = require('../controllers/project');

router.get('/', ctrlProject.listProjects);
router.get('/:n_proj', ctrlProject.getProject);
router.post('/', ctrlProject.newProject);
router.put('/:n_proj', ctrlProject.updateProject);
router.delete('/:n_proj', ctrlProject.deleteProject);

module.exports = router;

