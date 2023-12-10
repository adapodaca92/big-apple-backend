const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
    createUser: async (req, res) => {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: 'Both email and password are required.' });
            }
            const hashedPassword = bcrypt.hashSync(password, salt);
            const user = await User.create({
                email,
                password: hashedPassword,
            });
            res.json(user);
        } catch(err) {
            console.log(err);
            res.status(400).json('An error occured during registration.');
        }
    },
    getUserById: async (req, res) => {
        try {
            const id = req.params.id; 
            if (!id) {
                return res.status(400).json({ error: 'User ID is required.' });
            }
            const user = await User.findById({ _id: id });
            console.log(user)
            if (!user) {
                return res.status(404).json({ error: 'User not found.' });
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json('An error occurred while fetching user information.');
        }
    },
};