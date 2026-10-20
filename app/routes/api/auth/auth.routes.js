const express = require('express');
const router = express.Router();
const auth = require('../../../controller/auth/auth.controller.js')

router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/me', auth.me)

module.exports = router;