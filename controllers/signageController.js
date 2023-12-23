const CombinedData = require('../models/CombinedData');

const getAllSignages = async (req, res) => {
  try {
    const signages = await CombinedData.find({ 'signage': { $exists: true } });
    res.json(signages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createSignage = async (req, res) => {
  try {
    const newSignage = await CombinedData.create({ signage: req.body });
    res.status(201).json(newSignage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllSignages,
  createSignage,
};