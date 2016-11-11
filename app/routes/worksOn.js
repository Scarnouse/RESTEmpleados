var express = require('express');
var router = express.Router();
var ctrlWorksOn = require('../controllers/worksOn');

router.get("/:n_proj", ctrlWorksOn.listWhoWorksOnProyect);
router.post("/", ctrlWorksOn.newWorksOn);
router.put("/:n_proj", ctrlWorksOn.updateWorksOn);

module.exports = router;