const express = require('express');
const router = express.Router();
const homeRoutes = require('../app/routes/homeRoutes');
const userRoutes = require('../app/routes/userRoutes');

// Rutas principales
router.use('/', homeRoutes);
router.use('/users', userRoutes);

module.exports = router;
