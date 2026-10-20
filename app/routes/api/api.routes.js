const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth/auth.routes.js'))
router.use('/restaurant', require('./restaurant/restaurant.routes.js'))
module.exports = router;