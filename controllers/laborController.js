const Labor = require('../models/Labor');

// Assuming you have a fixed rate for labor per hour
const LABOR_RATE_PER_HOUR = 20; // Adjust this based on your actual rates

// Get all labor entries
const getAllLaborEntries = async (req, res) => {
  try {
    const laborEntries = await Labor.find();
    res.json(laborEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new labor entry
const createLaborEntry = async (req, res) => {
  const { numberOfMen, hoursOfWork, typeOfWork } = req.body;

  // Calculate cost based on labor rates
  let laborCost;
  if (typeOfWork === 'Straight Time') {
    laborCost = numberOfMen * hoursOfWork * LABOR_RATE_PER_HOUR;
  } else if (typeOfWork === 'Overtime') {
    // You can have a different overtime rate if needed
    const OVERTIME_RATE = 1.5; // 1.5 times the regular rate
    laborCost = numberOfMen * hoursOfWork * LABOR_RATE_PER_HOUR * OVERTIME_RATE;
  } else if (typeOfWork === 'Prevailing Wage') {
    // Handle prevailing wage calculation if needed
    // You might have a different rate for prevailing wage
    const PREVAILING_WAGE_RATE = 25; // Adjust this based on your actual rate
    laborCost = numberOfMen * hoursOfWork * PREVAILING_WAGE_RATE;
  }

  const newLabor = new Labor({
    numberOfMen,
    hoursOfWork,
    typeOfWork,
    price: laborCost,
  });

  try {
    await newLabor.save();
    res.status(201).json(newLabor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a labor entry
const updateLaborEntry = async (req, res) => {
  try {
    const updatedLaborEntry = await Labor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedLaborEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a labor entry
const deleteLaborEntry = async (req, res) => {
  try {
    await Labor.findByIdAndDelete(req.params.id);
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