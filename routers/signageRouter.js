const express = require('express');
const router = express.Router();
const signageController = require('../controllers/signageController');

router.get('/', signageController.getAllSignages);
router.post('/createSignage', signageController.createSignage);

module.exports = router;