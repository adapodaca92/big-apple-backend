// controllers/signageController.js
const Signage = require('../models/Signage');

const signageController = {
    getAllSignages: async (req, res) => {
        try {
            const signages = await Signage.find();
            res.json(signages);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    createSignage: async (req, res) => {
        try {
            const newSignage = await Signage.create(req.body);
            res.status(201).json(newSignage);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = signageController;