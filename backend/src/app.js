const express = require('express');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const appRoute = require('./routes/authRoute');

const app = express();

//Middleware
// app.use(cors({
//     origin: 'https://pulsecrm.vercel.app',
//     credentials: true,
//     methods: ["GET", "POST"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// }));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Here our API Routes
app.use('/api/auth', appRoute);

// exporting express App
module.exports = app;