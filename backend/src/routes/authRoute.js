const express = require('express');
const Admin = require('../controllers/adminController');

const router = express.Router();

router.post('/register', Admin.register);
router.post('/login', Admin.login);

module.exports = router;
