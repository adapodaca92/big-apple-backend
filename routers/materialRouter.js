const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

// Routes for Materials
router.get('/getMaterials', materialController.getAllMaterials);
router.post('/createMaterials', materialController.createMaterial);
router.put('/update/:id', materialController.updateMaterial);
router.delete('/delete/:id', materialController.deleteMaterial);

module.exports = router;