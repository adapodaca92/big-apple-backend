const TypeOfBuilding = require('../models/TypeOfBuilding');

const typeOfBuildingController = {
    getAllBuildingTypes: async (req, res) => {
        try {
            const buildingTypes = await TypeOfBuilding.find();
            res.json(buildingTypes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    createBuildingType: async (req, res) => {
        try {
            const newBuildingType = await TypeOfBuilding.create(req.body);
            res.status(201).json(newBuildingType);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = typeOfBuildingController;