const CombinedData = require('../models/CombinedData');

const getAllBuildingTypes = async (req, res) => {
  try {
    const buildingTypes = await CombinedData.find({ 'typeOfBuilding': { $exists: true } });
    res.json(buildingTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createBuildingType = async (req, res) => {
  try {
    const newBuildingType = await CombinedData.create({ typeOfBuilding: req.body });
    res.status(201).json(newBuildingType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllBuildingTypes,
  createBuildingType,
};