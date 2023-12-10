const express = require('express');
const router = express.Router();
const systemTypeController = require('../controllers/systemTypeController');

router.get('/', systemTypeController.getAllSystemTypes);
router.post('/createSystemType', systemTypeController.createSystemType);

module.exports = router;