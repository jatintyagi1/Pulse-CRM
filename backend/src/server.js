const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize the app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'https://pulsecrm.vercel.app/',
    credentials: true,
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.DATABASE)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.get('/api/status', (req, res) => {
    res.json({ message: 'This website is in development mode' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
