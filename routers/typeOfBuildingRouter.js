const express = require('express');
const router = express.Router();
const typeOfBuildingController = require('../controllers/typeOfBuildingController');

router.get('/', typeOfBuildingController.getAllBuildingTypes);
router.post('/createBuildingType', typeOfBuildingController.createBuildingType);

module.exports = router;