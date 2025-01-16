const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, country } = req.body;

        // Validate input
        if (!name || !email || !password || !country) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists.' });
        }

        // Create new user
        const user = new User({ name, email, password, country });
        await user.save();

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
