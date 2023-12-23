const CombinedData = require('../models/CombinedData');

const getAllMaterials = async (req, res) => {
  try {
    const materials = await CombinedData.find({ 'material': { $exists: true } });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMaterial = async (req, res) => {
  const { type, size, length, kind, quantity } = req.body.material;

  // Calculate cost based on material type and size
  let materialCost;
  if (type === 'Pipe') {
    if (size === '1.5') {
      materialCost = quantity * PIPE_1_5_PRICE;
    } else if (size === '2.5') {
      materialCost = quantity * PIPE_2_5_PRICE;
    }
  } else if (type === 'Fitting') {
    if (kind === 'Elbow') {
      materialCost = quantity * ELBOW_PRICE;
    } else if (kind === 'Tee') {
      materialCost = quantity * TEE_PRICE;
    }
  }

  const newEntry = new CombinedData({
    material: {
      type,
      size,
      length,
      kind,
      quantity,
      price: materialCost,
    },
  });

  try {
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a material
const updateMaterial = async (req, res) => {
  try {
    const updatedMaterial = await Material.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMaterial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a material
const deleteMaterial = async (req, res) => {
  try {
    await Material.findByIdAndDelete(req.params.id);
    res.json({ message: 'Material deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllMaterials,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};