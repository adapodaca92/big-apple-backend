const CombinedData = require('../models/CombinedData');

const getAllLaborEntries = async (req, res) => {
  try {
    const laborEntries = await CombinedData.find({ 'labor': { $exists: true } });
    res.json(laborEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createLaborEntry = async (req, res) => {
  const { numberOfMen, hoursOfWork, typeOfWork } = req.body.labor;

  // Calculate cost based on labor rates
  let laborCost;
  if (typeOfWork === 'Straight Time') {
    laborCost = numberOfMen * hoursOfWork * LABOR_RATE_PER_HOUR;
  } else if (typeOfWork === 'Overtime') {
    const OVERTIME_RATE = 1.5;
    laborCost = numberOfMen * hoursOfWork * LABOR_RATE_PER_HOUR * OVERTIME_RATE;
  } else if (typeOfWork === 'Prevailing Wage') {
    const PREVAILING_WAGE_RATE = 25;
    laborCost = numberOfMen * hoursOfWork * PREVAILING_WAGE_RATE;
  }

  const newEntry = new CombinedData({
    labor: {
      numberOfMen,
      hoursOfWork,
      typeOfWork,
      price: laborCost,
    },
  });

  try {
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateLaborEntry = async (req, res) => {
  try {
    const updatedEntry = await CombinedData.findByIdAndUpdate(
      req.params.id,
      { 'labor': req.body },
      { new: true }
    );
    res.json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteLaborEntry = async (req, res) => {
  try {
    await CombinedData.findByIdAndDelete(req.params.id);
    res.json({ message: 'Labor entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLaborEntries,
  createLaborEntry,
  updateLaborEntry,
  deleteLaborEntry,
};
