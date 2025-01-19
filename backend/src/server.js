const mongoose = require('mongoose');
require('dotenv').config();


// MongoDB Connection
mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log('MongoDB connected Successfully')
    })
    .catch((err) => {
        console.error('🚫 MongoDB connection error:', err)
    });


// Start Express App
const app = require('./app');
app.set('port', process.env.PORT || 5000)
const server = app.listen(app.get('port'), () => {
    console.log(`Server running on port ${server.address().port}`);
});
