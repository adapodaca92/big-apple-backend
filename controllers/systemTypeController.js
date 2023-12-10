const SystemType = require('../models/SystemType');

const systemTypeController = {
    getAllSystemTypes: async (req, res) => {
        try {
            const systemTypes = await SystemType.find();
            res.json(systemTypes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    createSystemType: async (req, res) => {
        try {
            const newSystemType = await SystemType.create(req.body);
            res.status(201).json(newSystemType);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = systemTypeController;