const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const register = async (req, res) => {
    try {
        const { name, email, password, country } = req.body;

        // Validate input
        if (!name || !email || !password || !country) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // check exist User
        const existingUser = await Admin.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ error: 'User Exist' })
        }

        // creating new Admin
        const admin = new Admin({ name, email, password, country })
        await admin.save();

        // Registration Successfully
        res.status(201).json({ message: 'Admin registered successfully.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error.' });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Find admin by email
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'Invalid email or password.' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Successfully Login Message
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error.' });
    }
};


module.exports = { register, login };
