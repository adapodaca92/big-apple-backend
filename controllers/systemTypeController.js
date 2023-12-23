const CombinedData = require('../models/CombinedData');

const getAllSystemTypes = async (req, res) => {
  try {
    const systemTypes = await CombinedData.find({ 'systemType': { $exists: true } });
    res.json(systemTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createSystemType = async (req, res) => {
  try {
    const newSystemType = await CombinedData.create({ systemType: req.body });
    res.status(201).json(newSystemType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllSystemTypes,
  createSystemType,
};